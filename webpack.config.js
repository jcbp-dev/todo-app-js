const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [ 'file-loader' ],
            },
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: true
        }),
        new CopyWebpackPlugin({
            patterns:[
                { from: 'src/assets/', to: 'assets/' }
            ]
        }),
    ],
}