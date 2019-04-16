<template>
  <Layout>
    <div id="icon-container">
      <div id="icon-wrapper">
        <div id="icon">
          <logo id="logo"/>
        </div>
      </div>
    </div>
    <h1 @mouseenter="startGlitch" @mouseleave="stopGlitch">{{glitchedTitle}}</h1>
    <download/>
  </Layout>
</template>

<page-query>
query Landing {
  content (path: "/landing") {
    title
  }
}
</page-query>

<script>
var zalgo = require("to-zalgo");
import Logo from "~/assets/images/Snafu.svg";
import Download from "~/components/landing/Download.vue";
export default {
  components: {
    Logo,
    Download
  },
  data() {
    return {
      glitchedTitle: "",
      titleHover: false
    };
  },
  methods: {
    glitchTitle() {
      if (this.titleHover) {
        this.glitchedTitle = zalgo(this.$page.content.title);
        setTimeout(this.glitchTitle, 50);
      }
      else this.glitchedTitle = this.$page.content.title;
    },
    startGlitch() {
      this.titleHover = true;
      this.glitchTitle();
    },
    stopGlitch() {
      this.titleHover = false;
    }
  },
  mounted() {
    this.glitchedTitle = this.$page.content.title;
  }
};
</script>



<style lang="scss">
#icon-container {
  max-width: 400px;
  margin: 0 auto;
}

#icon-wrapper {
  // height: 100px;
  width: 100%;
  border-radius: 30%;
  // border: white solid 2px;
  position: relative;
  padding-top: 100%;
}

#icon {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10%;
}

#logo {
  // width: 80%;
  padding-top: 10%;
  g {
    stroke: black;
  }
}

h1 {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
</style>