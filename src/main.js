import DefaultLayout from '~/layouts/Default.vue'

require('typeface-fira-sans')

import 'normalize.css'
import '~/assets/scss/_base.scss'

const metaTitle = 'Snafu - Glitch Art Creator'
const metaDescription = `Snafu is a glitch art tool for the desktop.  It uses data-bending to create truly bizarre creations from even the most banal images.`
const metaUrl = 'https://snafu.fun'
const metaImage = 'https://snafu.fun/images/opengraph.jpg'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  // Add Meta Tags
  head.meta.push({
    name: 'keywords',
    content: 'glitch,art,desktop,application,app,tool,creator,glitchy,databending,data,bending,data-bending'
  })
  head.meta.push({
    name: 'description',
    content: metaDescription
  })
  // Add open graph meta tags
  head.meta.push({
    key: 'og:title',
    name: 'og:title',
    content: metaTitle,
  })
  head.meta.push({
    key: 'og:type',
    name: 'og:type',
    content: 'website',
  })
  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: metaDescription,
  })
  head.meta.push({
    key: 'og:url',
    name: 'og:url',
    content: metaUrl,
  })
  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: metaImage,
  })
  head.meta.push({
    key: 'og:image:width',
    name: 'og:image:width',
    content: 279
  })
  head.meta.push({
    key: 'og:image:height',
    name: 'og:image:height',
    content: 279,
  })

  head.meta.push({
    key: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image',
  })
  head.meta.push({
    key: 'twitter:url',
    name: 'twitter:url',
    content: metaUrl,
  })
  head.meta.push({
    key: 'twitter:title',
    name: 'twitter:title',
    content: metaTitle,
  })
  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: metaDescription,
  })
  head.meta.push({
    key: 'twitter:image',
    name: 'twitter:image',
    content: 'https://snafu.fun/images/twitter.png',
  })


  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: metaDescription,
  })


  // Analytics
  head.script.push({
    src: '/js/lytics.js',
    // body: true
  })
}