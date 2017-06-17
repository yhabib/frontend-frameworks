var path = require("path");

var config = {
  /*
   * app.ts represents the entry point to the application. Webpack will
   * recursively go through every "require" statement in app.ts and
   * efficiently build out the application's dependency tree.
   */
  entry:  __dirname + '/src/app.ts',

  /*
   * The combination of path and filename tells Webpack what name to give to
   * the final bundled JavaScript file and where to store this file.
   * Public path is fo webpack-dev-server
   */
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  /*
   * Lets Webpack now in advance what file extensions you plan on
   * "require"ing into the web application, and allows you to drop them
   * in your code.
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    /*
     * Each loader needs an associated Regex test that goes through each
     * of the files you've included (or in this case, all files but the
     * ones in the excluded directories) and finds all files that pass
     * the test. Then it will apply the loader to that file. Starting with
     * the last on in the array
     */
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpg/,
        exclude: /(node_modules)/,
        loader: 'url-loader'
      }
    ]
  }
};

module.exports = config;