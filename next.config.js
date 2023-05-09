/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', '127.0.0.1:1337', 'bdainspections-2023.herokuapp.com', 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
