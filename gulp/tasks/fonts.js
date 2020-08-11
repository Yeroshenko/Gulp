module.exports = function fonts() {
  return $.gulp
    .src('dev/static/fonts/**/*.*')
    .pipe($.gulp.dest('dist/static/fonts'))
}
