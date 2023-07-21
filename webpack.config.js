const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
    // Use env.<YOUR VARIABLE> here:
    const isDev = env.development ? true : false;
    const styleLoaders = (loader) => {
        const loaders = [
            {
                loader: MiniCssExtractPlugin.loader,
            }, 'css-loader']

        if (loader) {
            loaders.push(loader)
        }

        return loaders;
    }

    let config = {
        context: path.resolve(__dirname, 'src'),
        entry: {
            index: './index.js',
            print: './print.js'
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'src'),
            },
            port: 8080,
            hot: isDev,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
        ],
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserWebpackPlugin(),
            ]
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: styleLoaders(),
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.m?ts$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-typescript']
                        }
                    }
                },
                {
                    test: /\.m?jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: '@babel/preset-react'
                        }
                    }
                },
            ],
        },
    }

    if (isDev) {
        config.devtool = 'source-map';
        config.output.filename = '[name].bundle.js';
        config.mode = 'development';
    } else {
        config.mode = 'production';
    }

    console.log(config);

    return config;
}