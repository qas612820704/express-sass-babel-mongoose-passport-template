var webpack = require("webpack");
module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'whatwg-fetch'],
    app: __dirname + '/public/javascripts/src/app.js',
  },
  output: {
    path: __dirname + '/public/javascripts/dist/',
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015','react', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};
