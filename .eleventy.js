const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"); 
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/styles/bundle.css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addWatchTarget("src/assets/styles/bundle.css");
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);

    return {
        dir: {
          input: "src"
        }
      }
};