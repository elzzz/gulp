const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('sass', function () {
  return gulp.src('src/stylesheets/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('pug', function() {
  return gulp.src('src/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
});

gulp.task('default', function () {
  gulp.watch('sass/**/*.sass', ['sass']);
  gulp.watch('src/views/*.pug', ['pug']);
});
