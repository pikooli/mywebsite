const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // for aws amplify
  // target: "experimental-serverless-trace",
  reactStrictMode: true,
  i18n,
  trailingSlash: true,
};

module.exports = nextConfig;
