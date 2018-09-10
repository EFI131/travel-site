var gulp = require("gulp");
const browsersync = require("browser-sync").create();

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./app"
        },
        port: 3000
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

gulp.task("watch", function (done) {
    gulp.watch("./app/index.html", browserSyncReload);
    gulp.watch("./app/assets/styles/**/*.css", gulp.series("styles", browserSyncReload));
    browserSync(done);
});