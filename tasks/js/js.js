import gulp from "gulp"
import webpack from "webpack-stream"
import rename from "gulp-rename"
import { config } from './../../webpack.config.js'

export const js = () => {
  return gulp.src('./src/js/app.js', { sourcemaps: true })
    .pipe(webpack(config))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./build/js'))
}