/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["image.freepik.com"],
  },
  env: {
    FAUNADB_KEY: process.env.FAUNADB_KEY,
  },
};
