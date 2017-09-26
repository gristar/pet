const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')

const entry = {
    'index': './src/scripts/index'
}

let htmlPlugin = [];
Object.keys(entry).forEach(function (item) {
    htmlPlugin.push(new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: item + '.html',
        chunks: ['vendor', item]
    }));
});

module.exports = {
    entry: entry,
    module: {
        rules: [{
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
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            WD_QQAPPID: JSON.stringify('1105309683'),
            WD_WXAPPID: JSON.stringify('wxfdab5af74990787a')
        }),

        new InlineManifestWebpackPlugin({
            name: 'webpackManifest'
        })
    ].concat(htmlPlugin)
}
