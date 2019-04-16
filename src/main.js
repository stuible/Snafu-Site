import DefaultLayout from '~/layouts/Default.vue'

import 'normalize.css'
import '~/assets/scss/_base.scss'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Mali:700|Nunito'
  // })
}