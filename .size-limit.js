const modifyWebpackConfig = (config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
    externals: {
      "react-native": true,
    },
  };
};

module.exports = [
  {
    path: "packages/requester/dist/musy-app-requester.cjs.prod.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/requester/dist/musy-app-requester.esm.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/shared-types/next/dist/musy-app-shared-types.cjs.prod.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/shared-types/next/dist/musy-app-shared-types.esm.js",
    modifyWebpackConfig,
  },
];
