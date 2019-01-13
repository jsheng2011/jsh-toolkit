const HtmlWebPackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

let path = require('path');
console.log('path.resolve(__dirname, \'src\')', path.resolve(__dirname, 'src'));
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../sample/index.js')
    },
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,

                // exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../sample'),

                    // path.resolve(__dirname, '../src/component/article/article.js')
                    path.resolve(__dirname, '../src')
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: false}
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../sample/index.html'),
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    resolve: {
        alias: {
            Component: path.resolve(__dirname, '../src/component')
        }
    },
    devServer: {
        historyApiFallback: true,
        port: 8888
    }
};
