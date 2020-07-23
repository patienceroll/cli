const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const plugins = [
  /**
   * 每次编译的时候,清空output文件夹
   */
  new CleanWebpackPlugin({}),
  /**
   * 复制 public文件夹的内容到output,如需复制其他文件或文件夹,可以继续添加参数
   */
  new CopyWebpackPlugin({
    patterns: [{ from: "public" }],
  }),
  /**  输出css文件 */
  new ExtractTextPlugin({
    filename: "style.[hash].css",
  }),
  /**
   * 生成index.html文件
   */
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "public/index.html",
  }),
];

exports.plugins = plugins;
