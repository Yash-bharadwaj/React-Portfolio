const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point of your app
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js'  // Output file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'  // Use Babel for JavaScript/JSX files
      }
    ]
  },
  devServer: {
    contentBase: './dist',  // Serve content from this directory
    port: 3000  // Port for development server
  }
};
