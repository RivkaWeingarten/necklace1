const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      // Define rules for processing different types of files (e.g., JavaScript, CSS)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for JavaScript files
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Add more rules for other file types as needed
    ],
  },
  node: {
    // Increase the memory limit for the build process
    // 4 GB in this example
    max_old_space_size: 4096,
  },
};
