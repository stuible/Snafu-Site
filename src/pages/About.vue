<template>
<Layout id="about">
    <h1>About</h1>
    <p>Snafu is a desktop app that makes creating glitch art more accessible to beginners and more creative for professionals. 
        It processes images using audio effects using a technique known as databending to create truly bizarre creations from even the most banal images.
    </p>
    <h2>Who Made This?</h2>
    <p>Snafu was designed and implemented by <a href="https://stuible.com/" target="_blank">Josh Stuible</a> and <a href="https://www.taylorwilkinson.ca/" target="_blank">Taylor Wilkinson</a> in Vancouver, Canada.</p>
    <h2>Why?</h2>
    <p>Currently gltich artists have to employ a toolchain consisting of multiple applications just to complete the simplest of databending experiments.
        Additionally, they have to complete a tedious set of steps everytime they want to make an adjustment to their bent image. 
        Finally, care has to be taken to avoid currrupting the image in the glitching process.  If file is modified imporoperly, the glitched image will not be able to be viewed
        and the artist will have to try again.
    </p>
    <p>Snafu aims to solve these problems, it automates the entire glitching process so an artist can quickly itereate and experiment.  
        By handling the conversion to and from audio, the aritst no longer has to worry about creating a currupted final product.</p>
    <h2>Databending?</h2>
    <p>Databending is the process of manipulating a media file of a certain format, using software designed to edit files of another format. 
        Distortions in the medium typically occur as a result, and the process either falls under a broader category of, or is frequently employed in glitch art. </p>
    <h2>Why did you use Electron?</h2>
    <p>I'm a child of the web. 🤷‍</p>
</Layout>
</template>

<page-query>

</page-query>

<script>

export default {
    components: {

    },
    name: 'About',
    metaInfo: {
        title: 'About',
    },
    // data() {

    // },
    methods: {

    },
    mounted() {

    }
};
</script>

<style lang="scss" scoped>
h2 {
    margin-top: 2em;
}

a {
    color: $colourText;

    &:hover {
        color: $colourLight;
    }
}

</style>
