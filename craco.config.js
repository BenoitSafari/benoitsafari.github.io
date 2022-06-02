const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
      '@hooks': path.resolve('src/hooks'),
      '@components': path.resolve('src/components'),
      '@pages': path.resolve('src/pages'),
      '@styles': path.resolve('src/styles'),
      '@fonts': path.resolve('public/fonts'),
      '@svg': path.resolve('src/assets/svg')
    }}};