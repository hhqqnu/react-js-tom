var debug = process.env.NODE_ENV != 'production';
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context:path.join(__dirname,'src'),
  devtool:debug ? 'inline-sourcemap':null,
  entry:'./js/client.js',
  output:{
    path:__dirname+'/src/',
    filename:'client.min.js'
  },
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        loader:'babel',
        query:{
          presets:['react','es2015','stage-0']
        }
      }
    ]
  },
  plugins:debug?[]:[
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle:false,sourcemap:false})
  ]
}
