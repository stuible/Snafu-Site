<template>
  <Layout class="homepage">
    <div class="col-6">
      <div id="icon-container">
        <logo id="logo" />
      </div>
      <h1>{{$page.content.title}}</h1>
      <h2>βeta {{$page.allRelease.edges[0].node.version}}</h2>
      <download />
    </div>

    <div class="col align-end">
      <div id="screenshot">
        <!-- <g-image
          v-for="index in 26"
          :class="{show: index == screenshotFrame}"
          v-bind:key="index"
          :src="require(`~/assets/images/screenshots/${index}.png`)"
          alt="Screenshot of Snafu"
        />-->
        <video ref="video" src="/video/landing.mp4"></video>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Landing {
  content (path: "/landing") {
    title,
    slug
  },
  allRelease(sortBy: "version", order: DESC) {
    edges {
        node {
        id,
        name,
        body,
        version,
        downloads {
            mac { url, name },
            win { url, name },
            linux { url, name }
        }
        }
      }
  }
}

</page-query>

<script>
import Logo from "~/assets/images/altSnafu.svg";
import Download from "~/components/landing/Download.vue";
export default {
  components: {
    Logo,
    Download
  },
  name: "Home",
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      screenshotFrame: 1,
      reverse: false
    };
  },
  methods: {
    nextFrame() {
      if (this.screenshotFrame < 26 && this.screenshotFrame > 1) {
        if (!this.reverse) {
          this.screenshotFrame++;
        } else this.screenshotFrame--;
      } else {
        if (this.screenshotFrame == 26 && !this.reverse) {
          this.reverse = true;
          this.screenshotFrame--;
        } else if (this.screenshotFrame == 1 && this.reverse) {
          this.reverse = false;
          this.screenshotFrame++;
        }
      }
    },
    updateVideo(position) {
      this.$refs.video.currentTime = position * (this.$refs.video.duration / 26)
    },
    handleMousemove(event) {
      let yPercent = (event.clientY - window.innerHeight) / -window.innerHeight
      console.log(yPercent * 26)
      this.updateVideo(yPercent * 26)
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.handleMousemove);
    // window.setInterval(() => {
    //   this.nextFrame()
    // }, 100)
  }
};
</script>

<style lang="scss" scoped>
#icon-container {
  max-width: 400px;
  // margin: 0 auto;
}

#logo {
  max-width: 10em;
  transition: filter 300ms linear;

  g {
    fill: $colourLight;
  }

  &:hover {
    filter: drop-shadow(0px 0px 50px $colourLight);
  }
}

h1 {
  margin-bottom: 0;
}

h2 {
  margin: 0;
  margin-bottom: 3em;
  font-size: 0.9em;
  color: $colourLight;
  transition: color 200ms linear;

  &:hover {
    color: $colourLight;
  }
}

#screenshot {
  max-width: 650px;
  float: right;
  text-align: right;
  // opacity: 0.5;
  transition: opacity 200ms linear;
  margin-left: 5em;
  display: none;

  @include breakpoint(phablet) {
    display: block;
  }

  video {
      width: 100%;
  }

  img {
    width: 100%;
    // opacity: 0;
    display: none;
    // transition: opacity 200ms linear;

    &.show {
      display: block;
    }

    // &.g-image--loaded {
    //     opacity: 1;
    // }
  }

  // &:hover {
  //     opacity: 1;
  // }
}
</style>
