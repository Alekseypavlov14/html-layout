import browserSync from 'browser-sync'

export const server = () => {
  return browserSync.init({
    server: {
      baseDir: './build'
    },
    notify: false,
    port: 3000
  })
}