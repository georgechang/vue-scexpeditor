const merge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].min.js'
    }
});