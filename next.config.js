/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    },
    i18n,

    experimental: {
        transpilePackages: ['react-syntax-highlighter', 'swagger-client', 'swagger-ui-react'],
    }
}

module.exports = nextConfig
