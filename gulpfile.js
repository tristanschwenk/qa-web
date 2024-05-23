'use strict';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulp from 'gulp';

const sass = gulpSass(dartSass);

gulp.task('styles', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./src/'));
});

gulp.task('build', gulp.parallel('styles'));
gulp.task('watch', () => {
  gulp.watch('./src/**/*.scss', gulp.parallel('styles'));
});


gulp.task('default', () => {
  // do something
});
