/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: [
      'https://gorillapack.herokuapp.com/',
      '127.0.0.1',
      '127.0.0.1:1337',
      'localhost',
    ],
  },
}
