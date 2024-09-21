import nextPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {};

// export default nextConfig;

console.log('nextConfig', nextConfig);

const withPWA = nextPWA({
  dest: "public",
})

// module.exports = withPWA({
//   nextConfig
// })

const f = withPWA(
  nextConfig
)

console.log('f', f);
export default f;
