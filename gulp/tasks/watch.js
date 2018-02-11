module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./app/pages/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./app/pages/*.html', $.gulp.series('html'));
        $.gulp.watch('./app/styles/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch('./app/resources/imgs/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./app/scripts/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'));
        $.gulp.watch(['./app/resources/imgs/content**/*.{png,jpg,gif}',
                     './app/recources/imgs/decor/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
    });
};
