/** @type {import('next').NextConfig} */
// Export estático: servido pela API Nest em /, sem servidor Node extra.
const nextConfig = { output: 'export', images: { unoptimized: true }, poweredByHeader: false };
export default nextConfig;
