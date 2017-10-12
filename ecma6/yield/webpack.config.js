var path = require('path');

module.exports = {
    entry: './src/yield.js',
    output: {
        path: __dirname,
        filename: 'lib/yield.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, 'es6'),
                loader: 'babel-loader' }
        ]
    }
};