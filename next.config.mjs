/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images:{
        unoptimized: true,
        domains:['localhost','res.cloudinary.com']
    }
};

export default nextConfig;
