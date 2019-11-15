const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');


gulp.task('css', () => {
  gulp.src('css/**/*.styl')
    .pipe(stylus({
      compress: true,
      'include css': true
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('assets'));
});

gulp.task('watch:css', gulp.series(['css'], () => {
  gulp.watch('css/**/*.styl', ['css']);
}));
