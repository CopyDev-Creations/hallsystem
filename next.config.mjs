/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV == 'production'
// const basePath = isProduction ? "/hallsystem" : ""
const basePath = isProduction ? "" : ""

const nextConfig = {
    basePath: basePath,
    // output: "export",
    reactStrictMode: false,
    // images: { unoptimized: true },
    env: {
        basePath: basePath,
    },
};


export default nextConfig;
