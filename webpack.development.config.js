module.exports = {
    "mode": "development",
    "entry": { 
        "vue-scexpeditor": "./src/index.js" 
    },
    "output": {
        "path": __dirname+'/dist',
        "filename": "[name].js"
    },
    devtool: 'inline-source-map',
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env"
                        ]
                    }
                }
            }
        ]
    }
};