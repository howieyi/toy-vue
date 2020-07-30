module.exports = {
  entry: {
    index: "./src/index.js",
  },
  devServer: {
    contentBase: "./src/",
    compress: false,
    port: 8000,
  },
  mode: "development",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
