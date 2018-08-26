const path = require('path');

module.exports = {
    entry: { 
        "vue-scexpeditor": "./src/index.js" 
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env"
                        ]
                    }
                }
            }
        ]
    }
};