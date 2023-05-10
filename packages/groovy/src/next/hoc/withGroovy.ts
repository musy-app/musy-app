import { NextConfig } from "next/types";

const withGroovy = (nextConfig: NextConfig | any = {}) => {
  return {
    ...nextConfig,
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  };
};

export default withGroovy;
