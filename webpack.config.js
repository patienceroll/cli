const path = require("path");

const { rules } = require("./config/module");
const { plugins } = require("./config/plugins");
const proxy = require("./config/proxy");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[hash].js",
    chunkFilename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@public": path.resolve(__dirname, "public"),
    },
  },
  module: {
    rules: rules,
  },
  plugins: plugins,
  devServer: {
    contentBase: "./dist",
    host: "127.0.0.1",
    port: "1996",
    proxy: proxy,
  },
};
