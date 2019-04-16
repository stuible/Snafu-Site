<template>
  <div>
    <header class="header">
      <nav>
        <g-link class="heading-link" :to="{ name: 'home' }">SNAFU</g-link>
      </nav>
    </header>
    <main class="container">
      <slot/>
    </main>
  </div>
</template>

<script>
import config from "~/.temp/config.js";

export default {
  computed: {
    titleTag() {
      return this.$route.name === "home" ? "h1" : "h6";
    },
    config() {
      return config;
    }
  }
};
</script>


<style lang="scss">
html {
  background-color: #fbda61;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  min-height: 100%;
}

.container{
  max-width: 1080px;
  margin: 0 auto;
}
</style>
