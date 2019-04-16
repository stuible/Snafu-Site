const path = require('path');

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
  path.resolve(__dirname, './src/assets/scss/variables.scss'),
  path.resolve(__dirname, './src/assets/scss/breakpoints.scss'),
	// or if you use scss
	// path.resolve(__dirname, './src/assets/sass/_globals.scss'),
	// you can also use a glob if you'd prefer
	// path.resolve(__dirname, './src/assets/sass/*.sass'),
	// or scss
	// path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}

module.exports = {
  siteName: `Snafu`,
  titleTemplate: `%s - Home`,
  icon: 'src/assets/images/favicon.png',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/content/*.md',
        typeName: 'Content',
        route: '/:slug'
      }
    }
  ],

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
