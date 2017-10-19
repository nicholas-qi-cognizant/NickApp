const path = require('path');

module.exports = {
  entry: './assets/dist/storefront.manifest.all.js',
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: 'bundle.js'
  }
};