module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("*.css");

	return {
		htmlTemplateEngine: "liquid",

		dir: {
			input: "./",
			output: "_site",
			// ⚠️ These values are both relative to your input directory.
			includes: "_includes",
			layouts: "_layouts"
		}
	}
};
