const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        code: './code.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: __dirname,
    },
};
