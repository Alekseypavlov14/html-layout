import gulp from 'gulp'
import imagemin from 'gulp-imagemin'

export const assets = () => {
  return gulp.src('./src/assets/**/**.**')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/assets/'))
}