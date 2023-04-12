const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      experimental: {
        appDir: true,
      },
      reactStrictMode: false,
      env: {
        NEXT_PUBLIC_URL: 'https://lime-tricky-pangolin.cyclic.app/api/v1',
        NEXT_API_URL: '/api/v1',
      },
      async rewrites() {
        return [
          {
            source: '/api/v1/:path*',
            destination:
              'https://lime-tricky-pangolin.cyclic.app/api/v1/:path*',
          },
        ];
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
    };
  }
  return {
    experimental: {
      appDir: true,
    },
    reactStrictMode: true,
    env: {
      NEXT_PUBLIC_URL: 'https://lime-tricky-pangolin.cyclic.app/api/v1',
      NEXT_API_URL: 'https://lime-tricky-pangolin.cyclic.app/api/v1',
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
};

module.exports = nextConfig;
