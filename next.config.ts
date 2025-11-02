import type {NextConfig} from "next";

const imageSizes = [32, 48, 64, 128, 256, 520, 680, 1920];
// @ts-ignore
function unique(value, index, self) {
  return self.indexOf(value) === index;
}

const imageSizesAll = [...imageSizes, ...imageSizes.map((w) => w * 2)]
  .filter((w) => w <= 1920)
  .filter(unique)
  .sort((a, b) => a - b);

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    deviceSizes: [1040],
    imageSizes: imageSizesAll,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  }
};

export default nextConfig;
