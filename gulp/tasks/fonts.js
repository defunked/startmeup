module.exports = function() {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./app/resources/fonts/**/*.*')
            .pipe($.gulp.dest('./dist/assets/fonts/'));
    });
};
