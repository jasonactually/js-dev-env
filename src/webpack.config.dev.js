import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [],
  module: {
    loaders: [
      {tests: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {tests: /\.css$/, loaders: ['style, css']}
    ]
  }
}
