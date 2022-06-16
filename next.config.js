/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [
      "image.freepik.com",
      "img.freepik.com",
      "images.unsplash.com",
      "images.pexels.com",
    ],
  },
  env: {
    FAUNADB_KEY: process.env.FAUNADB_KEY,
  },
};
