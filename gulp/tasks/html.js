module.exports = function() {
    $.gulp.task('html', () => {
        return $.gulp.src('./app/pages/*.html')
            .pipe($.gulp.dest('./dist/'))
            .on('end', $.browserSync.reload);
    });
};
