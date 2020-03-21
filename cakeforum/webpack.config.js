const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('config');
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
        path: path.resolve(__dirname, config.get('development.webpack.outputPath')),
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}