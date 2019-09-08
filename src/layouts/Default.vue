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
@keyframes gradient {
    0% {
        background-position: 9% 0%;
    }

    50% {
        background-position: 92% 100%;
    }

    100% {
        background-position: 9% 0%;
    }
}

html {
    background-color: $colourDark;
    color: $colourLight;
    // background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
    // background: linear-gradient(45deg, #fbda61, #ff5acd, #85f2cf);
    // background-size: 600% 600%;
    // animation: gradient 5s ease infinite;
    min-height: 100%;
}

main {
    // text-align: center;
}
</style>
