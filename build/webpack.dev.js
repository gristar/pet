const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const commonConfig = require('./webpack.config.js')

module.exports = webpackMerge(commonConfig, {
    output: {
        filename: 'scripts/[name]_[hash:8].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader?presets[]=env',
                        css: 'style-loader?insertAt=top!css-loader?minimize=true'
                    }
                }
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader',
                options: {
                    insertAt: 'top'
                }
            }, {
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            }]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'scripts/[name]_[hash:8].js',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'scripts/[name]_[hash:8].js',
            minChunks: Infinity
        })
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        disableHostCheck: true
    }
})