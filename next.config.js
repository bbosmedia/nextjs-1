/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: { appDir: true },
	images: ['./public/assets/images'],
}

module.exports = nextConfig
