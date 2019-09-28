const axios = require('axios')
const showdown  = require('showdown')
const converter = new showdown.Converter()

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://api.github.com/repos/stuible/snafu-releases/releases')

    const collection = actions.addCollection('Release')

    const pattern = /([0-9]+)\.([0-9]+)\.([0-9]+)/g;

    
    for (const item of data) {
      // console.log(item.assets)
      const mac = item.assets.find(asset => asset.name.endsWith('.dmg'))
      const win = item.assets.find(asset => asset.name.endsWith('.exe'))
      const linux = item.assets.find(asset => asset.name.endsWith('.snap'))
      
      let macDownload = () => {
        if(mac) return{
          name: 'macOS',
          url: mac.browser_download_url
        }
      }

      let winDownload = () => {
        if(win) return{
          name: 'Windows',
          url: win.browser_download_url
        }
      }

      let linuxDownload = () => {
        if(linux) return{
          name: 'Linux',
          url: linux.browser_download_url
        }
      }


      collection.addNode({
        id: item.id,
        name: item.name,
        body: converter.makeHtml(item.body),
        published_at: item.published_at,
        version: item.tag_name.match(pattern)[0],
        downloads: {
          mac: macDownload(),
          win: winDownload(),
          linux: linuxDownload(),
        }
      })
    }
  })
}