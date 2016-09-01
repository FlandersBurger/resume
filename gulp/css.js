var gulp = require('gulp')
var stylus = require('gulp-stylus')
var concat = require('gulp-concat');


gulp.task('css', function () {
  gulp.src('css/**/*.styl')
    .pipe(stylus({
      compress: true,
      'include css': true
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('assets'))
})

gulp.task('watch:css', ['css'], function () {
  gulp.watch('css/**/*.styl', ['css'])
})
