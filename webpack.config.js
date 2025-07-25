const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  
  // Aktivieren des persistenten Cachings
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    },
    compression: 'gzip',
    name: 'production-cache'
  },

  optimization: {
    // Optimiertes Chunk-Splitting
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          'cache-loader',
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    // Bundle-Analyzer für Visualisierung
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? 'server' : 'disabled',
      openAnalyzer: process.env.ANALYZE === 'true'
    })
  ]
};
