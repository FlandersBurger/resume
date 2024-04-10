const gulp = require('gulp');
const fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach((task) => {
  require('./gulp/' + task);
});

gulp.task('dev', gulp.parallel([
  'watch:css',
  'watch:js',
  'watch:json',
  'dev:server'
]));

gulp.task('build', gulp.parallel([
  'css',
  'js'
]));
