const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'inline-source-map'
};
