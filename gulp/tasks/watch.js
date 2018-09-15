var gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('scriptsRefresh', gulp.series('scripts', function (done) {
    browserSync.reload();
    done();
}));

gulp.task('watch', function (done) {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    // reload browser after changes in index.html
    gulp.watch("./app/assets/styles/**/*.css", gulp.series('styles', function () {
        return gulp.src('./app/temp/styles/styles.css')
            .pipe(browserSync.stream());
    }));

    gulp.watch("./app/index.html", gulp.series('styles')).on('change', browserSync.reload);

    gulp.watch('./app/assets/scripts/**/*.js', gulp.series('scriptsRefresh'));
    done();
});