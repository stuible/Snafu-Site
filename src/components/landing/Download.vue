<template>
<div>
 <a :href="download.url" target="_blank">Download for {{download.name}}</a>
</div>
</template>

<static-query>
query Downloads {
  content (path: "/downloads") {
   mac { url },
   windows { url }, 
   linux { url }
  }
}
</static-query>


<script>
const { detect } = require('detect-browser');
const browser = detect();
export default {
    data(){
        return {
            os: browser.os
        }
    },
    computed: {
        download(){
            switch (this.os) {
                case 'Mac OS':
                case 'Mac OS X':
                    return {
                        name: 'macOS',
                        url: this.$static.content.mac.url,
                    };
                    break;
                case 'Windows Vista':
                case 'Windows 7':
                case 'Windows 8.1':
                case 'Windows 8':
                case 'Windows 10':
                    return {
                        name: 'Windows',
                        url: this.$static.content.windows.url,
                    };
                    break;
                case 'Linux':
                    break;
                    return {
                        name: 'Linux',
                        url: this.$static.content.linux.url,
                    };
                default:
                    return false;
                    break;
            }
        }
    }
}

</script>

<style lang="scss">

</style>
