const path = require("path");
const pkgJson = require("./package.json");

module.exports = () => ({
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: `ifta-bundle.${pkgJson.version}.js`,
    library: "iftaBundle"
  },
  externals: {
    react: "React"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: ["babel-loader"]
      }
    ]
  }
});
