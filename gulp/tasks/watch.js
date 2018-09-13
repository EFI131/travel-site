var gulp = require('gulp');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssvars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");
var mixins = require('postcss-mixins');
const browserSync = require('browser-sync').create();

gulp.task('serve', function (done) {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    // reload browser after changes in index.html
    gulp.watch("./app/assets/styles/**/*.css", gulp.series('styles'));
    gulp.watch("./app/index.html", gulp.series('styles')).on('change', browserSync.reload);
    done();
});