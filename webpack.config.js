const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  const isDev = env.development ? true : false;

  let config = {
    externals: {
      "react": "React",
    },
    context: path.resolve(__dirname, "src"),
    entry: {
      index: "../index.tsx",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "src"),
      },
      port: 8080,
      hot: isDev,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "../index.html",
        publicPath: isDev ? '/' : '/DiplomaMessenger/',
      }),
      new ESLintPlugin(),
    ],
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
      publicPath: isDev ? '/' : '/DiplomaMessenger/',
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        maxSize: 244 * 1024,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        }
      },
      minimizer: [new CssMinimizerPlugin(), new TerserWebpackPlugin()],
      minimize: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName:'[local]--[hash:base64:5]',
                },
                importLoaders: 1,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          use: [
            'file-loader',
          ],
          generator: {
            filename: 'assets/images/svg/[hash][ext][query]', // изменение пути для изображений
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: 'assets/fonts/[hash][ext][query]', // изменение пути для шрифтов
          },
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.m?(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript"],
            },
          },
        },
        {
          test: /\.m?jsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: "@babel/preset-react",
            },
          },
        },
      ],
    },
  };

  if (isDev) {
    config.devtool = "source-map";
    config.output.filename = "[name].bundle.js";
    config.mode = "development";
  } else {
    config.mode = "production";
  }

  if (env.stats) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
};
