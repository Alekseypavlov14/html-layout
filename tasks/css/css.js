import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import browserSync from 'browser-sync'
import replace from 'gulp-replace'
import autoPrefixer from 'gulp-autoprefixer'
import clean from 'gulp-clean-css'
import rename from 'gulp-rename'
import groupMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const css = () => {
  return gulp.src('./src/scss/styles.scss', { sourcemaps: true })
    .pipe(replace(/@assets\//g, '../assets/'))
    .pipe(sass({ 
      outputStyle: 'expanded'
    }))
    .pipe(groupMediaQueries())
    .pipe(autoPrefixer({
      grid: true,
      cascade: true,
      overrideBrowserslist: ["last 3 versions"]
    }))
    .pipe(clean())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream())
}