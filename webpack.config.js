/* globals require, __dirname */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    target: 'web',
    entry: [
        // bundle the client for webpack-dev-server and connect to the provided endpoint
        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for hot reloading only- means to only hot reload for successful updates
        'webpack/hot/only-dev-server',
        // activate HMR for React
        'react-hot-loader/patch',
        // Our app entry point
        './demo/tickers.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    context: path.resolve(__dirname, 'src'),
    module: {
        rules: [
            // Javascript and JSX get processed by Babel
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader',
            },
            // CSS get processed by css-loader and then style
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'src')],
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.js', '.jsx', '.css', '.json']
    },
    externals: { react: 'React', 'react-dom': 'ReactDOM' },
    // devServer: {
    //     // enable HMR on the server
    //     hot: true,
    //     // must match the output path above
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     // must match the output `publicPath`
    //     publicPath: '/'
    // },
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
    ]
};
