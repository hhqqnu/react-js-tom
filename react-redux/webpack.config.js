var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtools:'inline-source-map',
  entry:'./index.js',
  output:{
    paht:path.join(__dirname,'dist'),
    filename:'bundle.js',
    publicPath:'/static/'
  },
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader',
        exclude:/node_mondules/,
        query:{
          presets:['react','es2015','stage-0']
        }
      }
    ]
  }
}
