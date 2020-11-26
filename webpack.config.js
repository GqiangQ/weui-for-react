const path = require('path')
const { webpack } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'weui',
        libraryTarget: 'umd',
        publicPath: '~/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 9000,
        inline:true
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.tsx?$/,
    //             loader: 'awesome-typescript-loader'
    //         }
    //     ]
    // },
}