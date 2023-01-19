module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('server')
  eleventyConfig.addPassthroughCopy('main.js')
  eleventyConfig.addPassthroughCopy('**/*.css')
  eleventyConfig.addPassthroughCopy('**/*.js')
  return {
    passthroughFileCopy: true
  }
}
