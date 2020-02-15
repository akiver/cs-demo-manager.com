const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, { mode = 'development' }) => {
  const isProduction = mode === 'production'

  return {
    devtool: isProduction ? false : 'cheap-module-source-map',

    entry: {
      polyfills: './src/polyfills.ts',
      index: './src/index.tsx',
    },

    mode,

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: isProduction ? '' : '/',
      filename: '[name].bundle.js',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },

    devServer: {
      port: 4000,
      overlay: true,
      historyApiFallback: true,
      disableHostCheck: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: [
            path.join(__dirname, 'node_modules/react-intl'),
            path.join(__dirname, 'node_modules/intl-messageformat'),
            path.join(__dirname, 'node_modules/intl-messageformat-parser'),
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]',
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                disable: isProduction === false,
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        title: 'CSGO Demos Manager',
        favicon: 'public/favicon.ico',
      }),
      new CopyPlugin([
        { from: 'src/images/docs', to: 'docs' },
        { from: 'public/robots.txt', to: '.' },
      ]),
      new MiniCssExtractPlugin({
        filename: 'css/[name].bundle.css',
        chunkFilename: '[id].css',
      }),
    ],
  }
}
