const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const connect = require('gulp-connect');

gulp.task('dev:server', () => {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['ng/*', 'gulp/*', 'assets/*']
  });

});
