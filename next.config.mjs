/** @type {import('next').NextConfig} */
const repoName = 'portfolio'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
}

export default nextConfig