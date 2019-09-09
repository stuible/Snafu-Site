<template>
<Layout class="homepage">
    <div class="col-6">
        <div id="icon-container">
            <logo id="logo" />
        </div>
        <h1>{{glitchedTitle}}</h1>
        <h2>βeta 0.1.0</h2>
        <download />
    </div>

    <div class="col align-end">
        <div id="screenshot">
            <g-image src="~/assets/images/screenshot.png" alt="Screenshot of Snafu" />
        </div>
    </div>
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
import Logo from "~/assets/images/altSnafu.svg";
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

    },
    mounted() {
        this.glitchedTitle = this.$page.content.title;
    }
};
</script>

<style lang="scss" scoped>
#icon-container {
    max-width: 400px;
    // margin: 0 auto;
}

#logo {
    // width: 80%;
    // padding-top: 10%;
    max-width: 10em;

    g {
        fill: $colourMedium;
    }
}

h1 {
    margin-bottom: 0;
}

h2 {
    margin: 0;
    margin-bottom: 3em;
    font-size: 0.9em;
    color: $colourMedium;
}

#screenshot {
    max-width: 650px;
    float: right;
    text-align: right;
    opacity: 0.5;
    transition: opacity 200ms linear;
    margin-left: 5em;
    display: none;

    @include breakpoint(phablet) {
        display: block;
    }

    img {
        width: 100%;
        opacity: 0;
        transition: opacity 200ms linear;

        &.g-image--loaded {
            opacity: 1;
        }
    }

    &:hover {
        opacity: 1;
    }
}
</style>
