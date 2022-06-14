const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
      '@lib': path.resolve('src/lib'),
      '@styles': path.resolve('src/styles'),
    }}};