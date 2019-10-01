const path = require('path');

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
  path.resolve(__dirname, './src/assets/scss/variables.scss'),
  path.resolve(__dirname, './src/assets/scss/breakpoints.scss'),
      ],
    })
}

module.exports = {
  siteName: `Snafu`,
  titleTemplate: `Snafu - %s`,
  icon: 'src/assets/images/favicon.png',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/content/*.md',
        typeName: 'Content',
        route: '/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/content/changelog/*.md',
        typeName: 'Changelog',
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
