const path = require("path");

require("prismjs/components/prism-json");

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
      require("../content/announcements.json")
    ),
  },
  ngBuild: {
    inlineStyleLanguage: "scss",
    assets: ["website/src/favicon.ico", "website/src/assets"],
    styles: [
      "./node_modules/prismjs/themes/prism-okaidia.css",
      "website/src/styles.scss",
    ],
    scripts: [],
  },
};
