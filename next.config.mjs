// next.config.js

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8456/:path*",
      },
    ];
  },
};

export default nextConfig;
