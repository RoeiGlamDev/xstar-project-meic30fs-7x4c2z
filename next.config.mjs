

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.pixabay.com'],
    formats: ['image/avif', 'image/webp']
},
  webpack(config) {
    
    return config;
  }
};

export default nextConfig;