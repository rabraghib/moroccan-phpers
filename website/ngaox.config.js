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
    mapper: require("@ngaox/devkit").getContestsMapper(
      path.join(__dirname, "../content/submissions"),
      require("../content/announcements.json")
    ),
  },
  icons: {
    dir: "website/src/icons",
    namespace: "app",
  },
};
