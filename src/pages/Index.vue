<template>
<Layout class="homepage">
    <div class="col-6">
        <div id="icon-container">
  
                    <logo id="logo" />
        </div>
        <h1 @mouseenter="startGlitch" @mouseleave="stopGlitch">{{glitchedTitle}}</h1>
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
        glitchTitle() {
            if (this.titleHover) {
                // this.glitchedTitle = zalgo(this.$page.content.title);
                setTimeout(this.glitchTitle, 50);
            } else this.glitchedTitle = this.$page.content.title;
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

<style lang="scss" scoped>

#icon-container {
    max-width: 400px;
    // margin: 0 auto;
}

// #icon-wrapper {
//     // height: 100px;
//     width: 100%;
//     border-radius: 30%;
//     // border: white solid 2px;
//     position: relative;
//     padding-top: 100%;
// }

// #icon {
//     position: absolute;
//     display: flex;
//     justify-content: center;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     // padding: 10%;
//     max-width: 10em;
// }

#logo {
    // width: 80%;
    // padding-top: 10%;
     max-width: 10em;

    g {
        fill: $colourMedium;
    }
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

    img {
        width: 100%;
    }

    &:hover {
        opacity: 1;
    }
}
</style>
