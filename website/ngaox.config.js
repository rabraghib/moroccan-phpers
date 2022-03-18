/**
 * @type {import('@ngaox/devkit').IBuilderOptions}
 */
module.exports = {
  outputPath: "dist/website",
  ngBuild: {
    inlineStyleLanguage: "scss",
    assets: ["website/src/favicon.ico", "website/src/assets"],
    styles: ["website/src/styles.scss"],
    scripts: [],
  },
};
