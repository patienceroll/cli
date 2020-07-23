const ExtractTextPlugin = require("extract-text-webpack-plugin");

const rules = [
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader",
    }),
  },
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: ["css-loader", "less-loader"],
    }),
  },
  {
    test: /\.tsx$/,
    use: ["ts-loader"],
  },
];

exports.rules = rules;
