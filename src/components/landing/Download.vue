<template>
  <div id="download">
    <!-- {{downloadList}} -->
    <a id="download-button" :href="download.url" target="_blank">
      <div v-if="download">Download for {{download.name}}</div>
      <div v-else>Not Available For {{this.os}}</div>
    </a>
    <div id="other-downloads">
      <button id="show-other" @click="showOtherDownloads = !showOtherDownloads">other platforms</button>

      <div id="other" :class="{show: showOtherDownloads}">
        <ul>
          <li v-for="(otherDownload, index) in otherDownloads" v-bind:key="index">
            <a :href="otherDownload.url">{{otherDownload.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<static-query>

</static-query>


<script>
import DownIcon from "~/assets/images/icons/downarrow.svg";
const { detect } = require("detect-browser");
const browser = detect();
export default {
  components: {
    DownIcon
  },
  data() {
    return {
      os: browser.os,
      showOtherDownloads: false
    };
  },
  mounted() {},
  computed: {
    downloadList() {
      return this.$page.allRelease.edges[0].node.downloads;
    },
    download() {
      switch (this.os) {
        case "Mac OS":
        case "Mac OS X":
          return {
            name: this.downloadList.mac.name,
            url: this.downloadList.mac.url
          };
          break;
        case "Windows Vista":
        case "Windows 7":
        case "Windows 8.1":
        case "Windows 8":
        case "Windows 10":
          return {
            name: this.downloadList.win.name,
            url: this.downloadList.win.url
          };
          break;
        case "Linux":
          break;
          return {
            name: this.downloadList.linux.name,
            url: this.downloadList.linux.url
          };
        default:
          return false;
          break;
      }
    },
    otherDownloads() {
      const downloads = [
        this.downloadList.win,
        this.downloadList.mac,
        this.downloadList.linux
      ];
      return downloads.filter(download => download.name !== this.download.name);
    }
  }
};
</script>

<style lang="scss">
#download {
  // background-color: white;
  // padding: 2em;
  border-radius: $border-radius;
  text-align: left;

  #download-button {
    border-bottom: 5px $colourLight solid;
    padding-bottom: 1em;
    margin-bottom: 2em;
    display: inline-block;
    transition: all 200ms linear;

    &:hover {
      // border-color: $colourLight;
    }

    a {
      font-weight: 700;
    }
  }

  #show-other {
    padding: 0;
    color: $colourLight;
    display: block;
    // margin: 0 auto;
    font-size: 12px;

    &:hover {
      color: $colourLight;
    }
  }

  #other {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 200ms linear, opacity 200ms linear,
      transform 200ms linear;
    transform: translateY(-10px);
    opacity: 0;

    &.show {
      max-height: 100px;
      transform: translateY(0);
      opacity: 1;
    }

    ul {
      margin: 1em 0;
    }

    li {
      margin: 0.5em 0;
      font-weight: 700;

      // a:hover {
      //     border-bottom: 2px solid $colourMedium;
      // }
    }
  }
}

#other-downloads {
  svg.indicator {
    width: 40px;
    cursor: pointer;
    transition: top 200ms linear;
    fill: $colourMedium;

    &.flip {
      transform: scaleY(-1);
    }
  }
}
</style>
