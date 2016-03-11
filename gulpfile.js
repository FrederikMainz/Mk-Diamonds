var gulp = require('gulp'),
    uglify = require('gulp-uglify')
    sass = require('gulp-ruby-sass');

    // Scripts task
    // Uglifies
gulp.task('scripts', function(){
  gulp.src('js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
});

// Styles task
// Uglifies
gulp.task('styles', function(){
  return sass('scss/**/*.scss')
  .pipe(sass({
      style: 'compressed'
  }))
  .pipe(gulp.dest('css/'));
});

// Watch task
// Watches JS
gulp.task('watch', function(){
  gulp.watch('/js/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
