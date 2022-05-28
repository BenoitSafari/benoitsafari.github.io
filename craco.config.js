const path = require('path');
// const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
      '@lib': path.resolve('src/lib'),
      '@components': path.resolve('src/components'),
      '@pages': path.resolve('src/pages'),
      '@styles': path.resolve('src/styles'),
      '@svg': path.resolve('src/assets/svg')
    }}};