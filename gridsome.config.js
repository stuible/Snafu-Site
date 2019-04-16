module.exports = {
  siteName: `Snafu`,
  titleTemplate: `%s - Home`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/*.md',
        typeName: 'Content',
        route: '/:slug'
      }
    }
  ],

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
