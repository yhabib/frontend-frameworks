var path = require('path');
module.exports = {
  
  /*
  * app.ts represents the entry point to the application. Webpack will
  * recursively go through every "require" statement in app.ts and
  * efficiently build out the application's dependency tree.
  */
  entry:  __dirname + '/src/app.js',

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
    extensions: [".js", ".ts"]
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      { 
        test: /\.html$/, 
        exclude: /(node_modules)/,
        loader: "html" 
      },
      { 
        test: /\.css$/, 
        exclude: /(node_modules)/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        exclude: /(node_modules)/,
        loader: 'url-loader'
      },

    ]
  },
  devtool: "#inline-source-map"
}