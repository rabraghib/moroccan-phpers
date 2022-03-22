const path = require("path");

/**
 * @type {import('@ngaox/devkit').IBuilderOptions}
 */
module.exports = {
  outputPath: "dist/website",
  press: {
    content: "**/*.md",
    dir: "content/challenges",
    mapper: require("@ngaox/devkit").getChallengesPressMapper(
      path.join(__dirname, "../content/submissions"),
      require("../content/~announcements.json")
    ),
  },
  ngBuild: {
    inlineStyleLanguage: "scss",
    assets: [
      "website/src/favicon.ico",
      "website/src/assets",
      {
        glob: "*.json",
        input: "content",
        output: "assets",
      },
    ],
    styles: ["website/src/styles.scss"],
    scripts: [],
  },
};
