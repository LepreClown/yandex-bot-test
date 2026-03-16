import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.config.ts");

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
  cacheComponents: true,
  images: {
    deviceSizes: [1040],
    imageSizes: imageSizesAll,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
