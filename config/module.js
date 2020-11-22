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
  {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "assets",
        },
      },
    ],
  },
];

exports.rules = rules;
