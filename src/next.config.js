/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#configuration
  output: 'export',
  // trailingSlash: true,

  // distDir: 'out'

  distDir: '../docs',
  basePath: '/docs',
  assetPrefix: '/docs/',
}

module.exports = nextConfig
