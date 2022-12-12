/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      'placeimg.com',
      'placehold.jp',
      'storage.googleapis.com',
      'example.com',
      'third.example.com',
      'forth.third.example.com',
      'fifth.forth.third.example.com',
      'def-sample.sample.com',
      'def-sample.sample.sample.com',
      'def-sample.sample.sample.sample.com',
      'def-sample.sample.sample.sample.sample.com'
    ]
  }
}

module.exports = nextConfig
