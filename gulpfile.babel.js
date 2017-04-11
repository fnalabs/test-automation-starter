import 'babel-polyfill';

import BUILD_CONFIG from './conf/buildConfig';

import { exec } from 'child_process';

import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

import del from 'del';

/*******************************************************************************
 * Contants
 ******************************************************************************/

// Tasks (prefixes and types)
const BUILD = 'build:';
const CLEAN = 'clean:';
const LINT = 'lint:';
const RUN = 'run:';
const TEST = 'test:';

const ALL = 'all';
const GULPFILE = 'gulpfile';
const SCRIPTS = 'scripts';

// Gulp + Plugins, etc.
const $ = loadPlugins();
const envCheck = process.env.NODE_ENV === 'production';

/*******************************************************************************
 * Utility method(s)
 ******************************************************************************/
function clean(path) {
    return del(path);
}

/*******************************************************************************
 * Lint method(s)
 ******************************************************************************/
function lintJS(src, cacheKey) {
    return gulp.src(src)
        .pipe($.cached(cacheKey))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.if(envCheck, $.eslint.failOnError()))
        .pipe($.remember(cacheKey));
}

/*******************************************************************************
 * Test method(s)
 ******************************************************************************/
function testAll(cb) {
    // exec('xvfb-run --server-args=\'-screen 0 1280x1024x24\' protractor ./conf/config.js', function (err, stdout, stderr) {
    exec('./node_modules/protractor/bin/protractor ./conf/config.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}

/*******************************************************************************
 * Build method(s)
 ******************************************************************************/
function buildJS() {
    return gulp.src(BUILD_CONFIG.SRC_SCRIPTS)
        .pipe($.changed(BUILD_CONFIG.OUTPUT_SCRIPTS))
        .pipe($.if(!envCheck, $.sourcemaps.init()))
        .pipe($.babel(BUILD_CONFIG.BABEL))
        .pipe($.uglify())
        .pipe($.if(!envCheck, $.sourcemaps.write('maps')))
        .pipe(gulp.dest(BUILD_CONFIG.OUTPUT_SCRIPTS));
}

/*******************************************************************************
 * Runner(s)
 ******************************************************************************/
function runWatch() {
    // gulp.watch(BUILD_CONFIG.SRC_GULPFILE, [`${LINT}${GULPFILE}`]);
    gulp.watch(BUILD_CONFIG.SRC_SCRIPTS, [`${RUN}${SCRIPTS}`]);
    gulp.watch(BUILD_CONFIG.OUTPUT_DEL, [`${TEST}${ALL}`]);
}

function runZip() {
    return gulp.src(BUILD_CONFIG.OUTPUT_ZIP, { base: './' })
        .pipe($.tar('test.tar'))
        .pipe($.gzip())
        .pipe(gulp.dest('.'))
        .once('error', function () {
            process.exit(1);
        })
        .once('end', function () {
            process.exit();
        });
}

/*******************************************************************************
 * Tasks
 ******************************************************************************/

// main task runners
gulp.task('default', [
    `${LINT}${GULPFILE}`,
    `${RUN}${SCRIPTS}`
], runWatch);
gulp.task('zip', [
    `${CLEAN}${ALL}`,
    `${LINT}${GULPFILE}`,
    `${RUN}${SCRIPTS}`
], runZip);

// run sequences
gulp.task(`${RUN}${SCRIPTS}`, [
    `${CLEAN}${SCRIPTS}`,
    `${LINT}${SCRIPTS}`,
    `${BUILD}${SCRIPTS}`
]);

// clean-specific tasks
gulp.task(`${CLEAN}${SCRIPTS}`, clean.bind(null, BUILD_CONFIG.OUTPUT_DEL));

// lint-specific tasks
gulp.task(`${LINT}${GULPFILE}`, lintJS.bind(null, BUILD_CONFIG.SRC_GULPFILE, GULPFILE));
gulp.task(`${LINT}${SCRIPTS}`, [`${CLEAN}${SCRIPTS}`], lintJS.bind(null, BUILD_CONFIG.SRC_SCRIPTS, SCRIPTS));

// build-specific tasks
gulp.task(`${BUILD}${SCRIPTS}`, [`${LINT}${SCRIPTS}`], buildJS);

// test-specific tasks
gulp.task(`${TEST}${ALL}`, testAll);
