import DefaultLayout from '~/layouts/Default.vue'

require('typeface-fira-sans')

import 'normalize.css'
import '~/assets/scss/_base.scss'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.script.push({
    src: '/js/lytics.js',
    // body: true
  })
}