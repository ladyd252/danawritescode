const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"); 
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/styles/bundle.css");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addWatchTarget("assets/styles/bundle.css");
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);

    return {
        dir: {
          input: "src"
        }
      }
};