var gulp = require('gulp');
const browserSync = require('browser-sync');
const server = browserSync.create();

function reload(done) {
    server.reload();
    done();
}

gulp.task('serve', function (done) {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
    // reload browser after changes in index.html
    gulp.watch("./app/index.html", gulp.series(reload));
    // and .css
    gulp.watch("./app/assets/styles/**/*.css", gulp.series('styles'));
    done();
});