var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('scripts', gulp.series('modernizr', function (callback) {
    webpack(require('../../webpack.config'),
        function (err, stats) {
            if (err) {
                console.log(err.toString);
                callback();
            }

            console.log(stats.toString());
            callback()
        });
}));