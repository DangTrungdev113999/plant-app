module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          rootPathSuffix: "./src",
          rootPathPrefix: "@",
        },
      ],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "src/components",
            "@navigation": "src/navigation",
            "@config": "src/config",
            "@screens": "src/screens",
            "@utils": "src/utils",
            "@mocks": "src/mocks",
            "@assets": "assets",
          },
        },
      ],
    ],
  };
};
