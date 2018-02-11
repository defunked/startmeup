module.exports = function() {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(
          ['node_modules/svg4everybody/dist/svg4everybody.min.js', 'node_modules/fontfaceobserver/fontfaceobserver.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./dist/assets/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js', 'node_modules/fontfaceobserver/fontfaceobserver.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./dist/assets/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./app/scripts/*.js',
                           '!./app/scripts/libs.min.js'])
            .pipe($.gulp.dest('./dist/assets/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
