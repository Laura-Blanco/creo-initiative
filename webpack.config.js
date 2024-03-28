const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const path = require('path');

module.exports = {
  entry: [
    './src/Home.js',
    './src/style.css'
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname),
        watch: true,
      },
      {
        directory: path.resolve(__dirname, 'src'),
        watch: true,
      }
    ],
    port: 8000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'config.json', to: 'config.json' },
        { from: 'src/images', to: 'images' },
      ]
    })
  ]
}