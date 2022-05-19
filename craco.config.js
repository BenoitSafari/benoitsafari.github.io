const path = require('path');
// const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
      '@lib': path.resolve('src/lib'),
      '@pages': path.resolve('src/pages'),
      '@style': path.resolve('src/styles'),
    }}};