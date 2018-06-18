const path = require('path');
const webpack = require('webpack');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        index: path.resolve(__dirname, './app/app.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/',
        chunkFilename: 'js/[name].js',
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            react: 'anujs/dist/ReactIE.js',
            'react-dom': 'anujs/dist/ReactIE.js',
            'prop-types': 'anujs/lib/ReactPropTypes',
            devtools: 'anujs/lib/devtools',
            'create-react-class': 'anujs/lib/createClass',
        },
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: ['last 2 versions', 'ie >= 7'],
                                    },
                                    modules: 'commonjs',
                                    useBuiltIns: true,
                                    debug: false,
                                },
                            ],
                            'react',
                            'stage-2',
                        ],
                        plugins: ['transform-runtime', 'import'],
                    },
                },
                include: [path.resolve(__dirname, 'app')],
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'app')],
                use: ['style-loader', 'css-loade'],
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100,
                            name: 'asset/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    mode: 'development',

    plugins: [
        new es3ifyPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './app/index.ejs'),
            inject: 'body',
            hase: false,
            minify: {
                // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: false, // 删除空白符与换行符
            },
            chunks: ['index'],
        }),
    ],
};
