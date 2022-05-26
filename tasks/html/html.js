import gulp from 'gulp'
import include from 'gulp-file-include'
import replace from 'gulp-replace'
import browserSync from 'browser-sync'

export const html = () => {
  return gulp.src('./src/index.html')
    .pipe(include())
    .pipe(replace(/@assets\//g, 'assets/'))
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream())
}