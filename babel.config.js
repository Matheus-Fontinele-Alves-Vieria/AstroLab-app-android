const { resolve } = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],

    plugins: [
      [
        "module-resolver",
        {
          root: [resolve(__dirname)],
          alias: {
            assets: "./assets",
            views: "./views",
          },
        },
      ],
    ],
  };
};
