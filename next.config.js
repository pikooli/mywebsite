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
      test: /\.(glsl|ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        'raw-loader',
        'glslify-loader',
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
