
const path = require('path')
const { FileListPlugin } = require('./custom-plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve(__dirname, './custom-loader.js'),
                        options: {
                            youyou: 'haha'
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new FileListPlugin()
    ]
}