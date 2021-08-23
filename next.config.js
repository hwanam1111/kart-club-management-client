const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  future: {
    webpack5: false,
  },
  compress: true,
  env: {
    BACKEND_SERVER_URL: process.env.BACKEND_SERVER_URL,
  },
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ],
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
        ],
      },
    };
  },
});

module.exports = withPlugins([], nextConfig);
