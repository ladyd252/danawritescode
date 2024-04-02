---
title: Syncing updates to passthrough files in 11ty
publish_date: "March 27, 2024"
date: 2024-03-27
preview_text: A quick note in case you run into this issue as I did. I was adding a css file to my blog and set up a **.eleventy.js** file with the lines...
---

A quick note in case you run into this issue as I did. I was adding a css file to my blog and set up a **.eleventy.js** file with the lines

```javascript

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
};
```

as described in the [11ty docs](https://www.11ty.dev/docs/assets/). This added the styles to my blog, however when I updated the css file, despite having <code>npx @11ty/eleventy --serve</code> running, I didn't see my changes reflected.

This is easily fixed by updating my **.eleventy.js** file to

```javascript
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addWatchTarget("bundle.css");
};
```

There are other ways to apply styles to your 11ty site - let me know if you prefer a different way or if this post helped you.
