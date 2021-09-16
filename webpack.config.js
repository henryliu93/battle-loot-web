const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname,"node_modules")
                ],
                options: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                use: ["style", "css"]
            },
            {
                test: /\.less/,
                use: ['style-loader','css-loader','less-loader']
            }
        ]
    }
}