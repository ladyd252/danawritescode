const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addWatchTarget("bundle.css");
    eleventyConfig.addPlugin(syntaxHighlight);
};