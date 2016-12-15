module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  devServer: {
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};
