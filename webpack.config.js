const path = require('path')

module.exports = [
  {
    mode: 'production',
    entry: './src/vue3.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'vue3.js',
      library: {
        type: 'window',
      },
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          include: /src/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  {
    mode: 'production',
    entry: './src/vue3-modules.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'vue3-modules.js',
      library: {
        type: 'window',
      },
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          include: /src/,
          loader: 'babel-loader',
        },
      ],
    },
  },
]
