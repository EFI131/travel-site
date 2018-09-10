var gulp = require('gulp');
const browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function (done) {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
    // reload browser after changes in index.html
    gulp.watch("./app/index.html", reload);
    // and .css
    gulp.watch("./app/assets/styles/**/*.css", gulp.series('styles'));
    done();
});