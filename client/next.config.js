/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: "http://localhost:4000/"
  }
}

module.exports = nextConfig
