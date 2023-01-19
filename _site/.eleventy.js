module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('**/*.css')
  eleventyConfig.addPassthroughCopy('Sandwich/images')
  eleventyConfig.addPassthroughCopy('**/*.js')
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('server')
  eleventyConfig.addPassthroughCopy('main.js')
  return {
    passthroughFileCopy: true
  }
}
