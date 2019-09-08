<template>
<div>
    <header class="header">
        <div class="container">
            <nav>
                <g-link class="heading-link" to="/">Home</g-link> | 
                <g-link class="heading-link" to="/about">About</g-link>  | 
                <g-link class="heading-link" to="/help">Help</g-link>  | 
                <g-link class="heading-link" to="/changelog">Changelog</g-link>
            </nav>
        </div>
    </header>
    <main class="container">
        <slot />
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
.homepage main.container {
    margin-top: 7em;
    display: flex;
}

::selection {
  background: $colourLight;
  color: white;
}

html {
    background-color: $colourDark;
    color: #a39dc1;
    min-height: 100%;
    
}

nav {
  margin-top: 2em;
  color: $colourMedium;
}

main {
    // text-align: center;
}
</style>
