const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, ".."),
        filename: 'index.js'
    }
});