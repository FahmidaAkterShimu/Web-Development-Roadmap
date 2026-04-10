/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,


  images: {
    remotePatterns: [
      // https://plus.unsplash.com/premium_photo-1774271492663-a7d50adbed56
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },

      //  https://i.ibb.co.com/76Yt4VX/Babar-Azam.png

      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
