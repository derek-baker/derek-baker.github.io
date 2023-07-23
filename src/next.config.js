const isDevBuild = process.env.IS_DEV_ENV === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Output static files for non-Dev builds: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#configuration
  output: isDevBuild ? undefined : 'export',

  // Output files to Github-Pages-specific dir for non-Dev builds
  distDir: isDevBuild ? 'out' : '../docs'
}

module.exports = nextConfig
