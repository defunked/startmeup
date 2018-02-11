module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('./app/pages/*.pug')
            .pipe($.gp.pug({
                locals : {
                    nav: JSON.parse($.fs.readFileSync('./app/data/navigation.json', 'utf8')),
                    content: JSON.parse($.fs.readFileSync('./app/data/content.json', 'utf8')),
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./dist/'))
            .on('end', $.browserSync.reload);
    });
};
