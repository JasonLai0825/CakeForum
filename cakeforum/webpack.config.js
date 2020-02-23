const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    entry: './main.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, '/Apache24/htdocs/CakeForum/cakeforum'),
    }
}