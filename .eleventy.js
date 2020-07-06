const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"),
  markdownIt = require("markdown-it");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("favicon.png");

  const options = {
    html: true,
    breaks: true,
    linkify: false,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));

  return {
    // Use liquid in html templates
    htmlTemplateEngine: "liquid",
  };
};
