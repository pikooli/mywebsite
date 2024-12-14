const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // for aws amplify
  // target: "experimental-serverless-trace",
  reactStrictMode: true,
  i18n,
  trailingSlash: true,
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(glsl|vert|frag)$/i, // Only target GLSL files
      exclude: /node_modules/, // Avoid processing dependencies
      use: [
        {
          loader: 'raw-loader',
        },
        {
          loader: 'glslify-loader',
        },
      ],
    });

    config.module.rules.push({
      test: /\.(mp3|wav|mpe?g|png|jpg|gif|svg)$/i, // Media files
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
