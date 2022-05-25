import gulp from 'gulp'

import { clean } from './tasks/clean/clean.js'
import { html } from './tasks/html/html.js'
import { css } from './tasks/css/css.js'
import { js } from './tasks/js/js.js'
import { assets } from './tasks/assets/assets.js'
import { server } from './tasks/server/server.js'

const watcher = () => {
  gulp.watch('./src/scss/**/**.**', css)
  gulp.watch('./src/js/**/**.**', js)
  gulp.watch('./src/assets/**/**.**', assets)
  gulp.watch('./src/**/**.html', html)
}

const mainTasks = gulp.series(
  clean, 
  html,
  gulp.parallel(
    css,
    js,
    assets
  )
)

const dev = gulp.series(
  mainTasks,
  gulp.parallel(
    watcher,
    server
  )
)

const prod = mainTasks

export { dev }
export { prod }