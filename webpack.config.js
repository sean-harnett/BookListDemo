const path = require('path');

const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        css: './src/css/style.css',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpack({ template: './src/index.html' })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use:
                [
                    'style-loader',
                    'css-loader',
                ],

        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        ]
    }
};