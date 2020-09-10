let gulp = require('gulp');
    sass = require('gulp-sass');
    
 
gulp.task('scss', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.scss', gulp.parallel('scss'));
});