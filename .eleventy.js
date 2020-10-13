module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "css",
    "png",
    "jpg",
    "svg"
  ]);
  return {
      dir: {
        input: ".",
        includes: "_includes",
        data: "_data",
        output: "docs"
    }
  }
};