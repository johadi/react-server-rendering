const path = require('path');
module.exports = {
    entry: './client/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            // Set up jsx. This accepts js too thanks to RegExp
            {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: '/node_modules'
            }
          ]
    }
}
