/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https://portfolio-project-pics.s3.eu-west-2.amazonaws.com",
      "images.unsplash.com",
    ],
  },
}

module.exports = nextConfig
