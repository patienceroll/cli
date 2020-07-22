const path = require("path");

const { rules } = require("./config/module");
const { plugins } = require("./config/plugins");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: rules,
  },
  plugins: plugins,
  devServer: {
    contentBase: "./dist",
  },
};
