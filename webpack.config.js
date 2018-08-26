module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: { 
        'vue-scexpeditor': './src/index.js' 
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env'
                        ]
                    }
                }
            }
        ]
    }
};