module.exports = {
    entry: "./src/index",
    output: {
        path: __dirname + "/dist", publicPath: 'dist/', filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};