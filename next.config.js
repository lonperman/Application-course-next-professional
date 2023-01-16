/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy', 'tailwindui.com', 'ui-avatars.com'],
  },
};

module.exports = nextConfig;
