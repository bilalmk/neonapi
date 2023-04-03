/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEON_DATABASE_URL: 'postgres://bilalmk:y3OWzL5HBXeE@ep-winter-scene-539391.us-east-2.aws.neon.tech:5432/neondb',
  }
  
}

module.exports = nextConfig
