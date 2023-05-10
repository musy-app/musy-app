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
    path: "packages/shared-types/dist/musy-app-shared-types.cjs.prod.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/shared-types/dist/musy-app-shared-types.esm.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/groovy/dist/musy-app-groovy.cjs.prod.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/groovy/dist/musy-app-groovy.esm.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/groovy/next/dist/musy-app-groovy-next.cjs.prod.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/groovy/next/dist/musy-app-groovy-next.esm.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/groovy/native/dist/musy-app-groovy-native.cjs.prod.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/groovy/native/dist/musy-app-groovy-native.esm.js",
    modifyWebpackConfig,
  },
];
