const path = require("path");
const webpack = require("webpack");


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      
      
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: "postcss-loader",
  
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      }
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [ 
    new webpack.SourceMapDevToolPlugin({})
    ////////////////88888888888888888commented tala ko
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     // This has effect on the react lib size
    //     NODE_ENV: JSON.stringify("production"),
    //   },
    // }),
  ],
};