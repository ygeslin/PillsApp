const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  mode: 'development', // Set the mode to development
  devServer: {
    compress: true, // Enable gzip compression for everything served
    static: {
      directory: path.join( __dirname, 'public' ),
    },
    port: 9000, // Set the port to 9000
    hot: true, // Enable hot module replacement feature
  },
  entry: './src/index.tsx', // Entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve( __dirname, 'dist' ), // Output directory
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ], // Resolve extensions for import statements
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader', // Use ts-loader to compile TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [ new HtmlWebpackPlugin() ],
};
