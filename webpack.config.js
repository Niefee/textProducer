var webpack=require('webpack');
module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('hello,MuSsh!!'),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
                }
            })
    ],
    devServer:{
      //使用webpack构建必须加上这行其他设备才可以访问。
      host:'0.0.0.0'
    }
};
