module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src('./app/styles/app.scss')
            .pipe($.gp.sass({
                // 'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./dist/assets/css/'))
    });

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./app/styles/app.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                // 'include css': true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Sass',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./dist/assets/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
