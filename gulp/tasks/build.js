var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('previewDist', function () {
    browserSync.init({
        server: {
            baseDir: "docs"
        }
    });
});


gulp.task('deleteDistFolder', gulp.series('icons', function () {
    return del("./docs");
}));

gulp.task('copyGeneralFiles', gulp.series(function () {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ];

    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./docs"))
}));

// copy and compress image files
gulp.task('optimizeImages', function () {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('usemin', gulp.series('styles', 'scripts', function () {
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [rev(), cssnano()],
            js: [rev(), uglify()]
        }))
        .pipe(gulp.dest("./docs"));
}));

gulp.task('build', gulp.series('deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin'));