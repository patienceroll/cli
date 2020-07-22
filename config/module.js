const rules = [
  {
    test: /\.css$/,
    use: ["css-loader"],
  },
  {
    test: /\.less$/,
    use: ["less-loader"],
  },
  {
    test: /\.tsx$/,
    use: ["ts-loader"],
  },
];

exports.rules = rules;
