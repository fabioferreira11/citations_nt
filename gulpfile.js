// BEGIN: webp-conversion-task
const gulp = require('gulp');
const webp = require('gulp-webp');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

gulp.task('convert-images', function() {
    return gulp.src('src/img/*.{png,jpg,jpeg}')
        .pipe(webp())
        .pipe(gulp.dest('dist/img/'));
});
// END: webp-conversion-task

// BEGIN: css-minification-task
gulp.task('minify-css', function() {
    return gulp.src('src/css/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css/'));
});
// END: css-minification-task

// BEGIN: js-minification-task
gulp.task('minify-js', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js/'));
});
// END: js-minification-task

// BEGIN: replace-task
gulp.task('replace', function() {
    return gulp.src('src/index.html')
        // .pipe(replace('style.css', 'style.min.css'))
        .pipe(replace('script.js', 'script.min.js'))
        // .pipe(replace(/\.png/g, '.webp'))
        .pipe(gulp.dest('dist/'));
});

// END: replace-task

// BEGIN: all-tasks
gulp.task('default', gulp.series('convert-images', 'minify-css', 'minify-js','replace'));
// END: all-tasks

