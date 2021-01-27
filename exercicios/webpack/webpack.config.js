const webpack = require('webpack')
const MiniCssExtract = require('mini-css-extract-plugin')
const modoDev = process.env.NODE_ENV !== 'production'
const UglifyJs = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJs({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssets({})
        ],
    },
    plugins: [
        new MiniCssExtract({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtract.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', //interpreta @import, url()
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}