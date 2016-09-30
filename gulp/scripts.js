var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var jsonminify = require('gulp-jsonminify');

gulp.task('js', function () {
  gulp.src(['ng/module.js', 'ng/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
    .on('error', onError);
});

gulp.task('watch:js', ['js'], function () {
  gulp.watch('ng/**/*.js', ['js']);
});

gulp.task('json', function () {
    return gulp.src(['data/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('assets'));
});

gulp.task('watch:json', ['json'], function () {
  gulp.watch('data/*.json', ['json']);
});

function onError(err) {
  console.log(err);
  this.emit('end');
}
