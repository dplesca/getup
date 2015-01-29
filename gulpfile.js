var gulp = require('gulp'), uglify = require('gulp-uglify'), concat = require('gulp-concat'), minifyCSS = require('gulp-minify-css');;

gulp.task('compress', function() {
  gulp.src(['assets/js/circles.min.js', 'assets/js/app.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'));
  gulp.src(['assets/css/normalize.css', 'assets/css/circles.min.css'])
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('.'));
});