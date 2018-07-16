const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const entry = {
    'index': './src/scripts/index'
};

let htmlPlugin = [];
Object.keys(entry).forEach(function (item) {
    htmlPlugin.push(new HtmlWebpackPlugin({
        title: 'Pet',
        template: 'src/index.html',
        filename: item + '.html',
        chunks: ['vendor', item]
    }));
});

module.exports = {
    entry: entry,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg|)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            publicPath: '',
                            outputPath: 'assets/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'styles': path.join(__dirname, 'src/styles/'),
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            LIBDIR: JSON.stringify('lib')
        }),
        new InlineManifestWebpackPlugin({
            name: 'webpackManifest'
        }),
        new ExtractTextPlugin('styles/[name]_[contenthash:8].css')
    ].concat(htmlPlugin)
};
