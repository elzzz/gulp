const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const connect = require('gulp-connect');
const image = require('gulp-image');

gulp.task('scss', function () {
  return gulp.src('src/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('pug', function() {
  return gulp.src('src/views/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(connect.reload())
    .pipe(gulp.dest('dist'))
});

gulp.task('image', function () {
  gulp.src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    fallback: 'dist/index.html',
    port: 8000
  });
});

gulp.task('build', ['scss', 'pug', 'image', 'connect'])

gulp.task('default', ['build'], function () {
  gulp.watch('src/stylesheets/*.scss', ['scss']);
  gulp.watch('src/stylesheets/**/*.scss', ['scss']);
  gulp.watch('src/views/*.pug', ['pug']);
  gulp.watch('src/images/*', ['image']);
});
