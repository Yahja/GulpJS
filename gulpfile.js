var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    uglify = require('gulp-uglify');

var root = 'src/',
    scss = root + 'sass/',
    js = root + 'javascript/';

var dist = 'build/';
    jsdist = dist + 'js/';
    cssbuild = dist + 'css/'

var htmlWatchFiles = dist + '**/*.html',
    styleWatchFiles = scss + '**/*.scss';

var jsSRC = [
    js + 'carousel.js',
    js + 'functions.js'
];

var cssSRC = [
    dist + 'css/bootstrap.css',
    dist + 'css/style.css'
];

var imgSRC = root + 'images/**/*',
    imgDEST = dist + 'images';

function css() {
    return gulp.src([scss + 'style.scss'])
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cssbuild));
}

function concatCSS() {
    return gulp.src(cssSRC)
    .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./maps/'))
    .pipe(gulp.dest(cssbuild));
}

function javascript() {
    return gulp.src(jsSRC)
    .pipe(concat('javascript.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsdist));
}

function imgmin(){
    return gulp.src(imgSRC)
    .pipe(changed(imgDEST))
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
    ]))
    .pipe(gulp.dest(imgDEST))
}

function watch(){
    browserSync.init({
        server: {
            baseDir: 'build/'
        },
        port: 8080,
    });
    gulp.watch(styleWatchFiles, gulp.series([css, concatCSS])).on('change', browserSync.reload);
    gulp.watch(jsSRC, javascript);
    gulp.watch(imgSRC, imgmin);
    gulp.watch([htmlWatchFiles, jsdist + 'javascript.min.js', dist/css + 'style.min.css']).on('change', browserSync.reload);
}

exports.css = css;
exports.concatCSS = concatCSS;
exports.javascript = javascript;
exports.watch = watch;
exports.imgmin = imgmin;

var build = gulp.parallel(watch);
gulp.task('default', build);