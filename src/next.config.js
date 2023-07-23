/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#configuration
  output: 'export',
  // trailingSlash: true,

  // When developing, use this setting
  // distDir: 'out'

  // When building an artifact for deployment, use this setting
  distDir: '../docs',
  // basePath: '/docs',
  // assetPrefix: '/docs/',
}

module.exports = nextConfig
