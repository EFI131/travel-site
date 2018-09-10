var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('html', function (done) {
  console.log("Imagine something useful being done to your HTML here.");
  done();
});

gulp.task('styles', function (done) {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function (done) {
  gulp.watch('./app/index.html', gulp.series('html'));
  gulp.watch("./app/assets/styles/**/*.css", gulp.series('styles'));
  done();
});

gulp.task('default',
  gulp.series('styles', 'html', 'watch', function (done) {
    done();
  }));