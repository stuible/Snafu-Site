<template>
<Layout class="changelog">
    <h1>Changelog</h1>
    <ul>
        <li v-for="{ node } in $page.allRelease.edges" :key="node.id">
            <div class="title-wrapper">
                <h3 v-html="node.version" class="version" />
                <h2 v-html="node.name" class="title" />
            </div>
            <p v-html="node.body"></p>
        </li>
    </ul>
</Layout>
</template>

<page-query>
query Landing {
  allRelease(sortBy: "version", order: DESC) {
    edges {
        node {
        id,
        name,
        body,
        version
        }
      }
  }
}
</page-query>

<script>
export default {
    components: {

    },
    name: 'Changelog',
    metaInfo: {
        title: 'Changelog',
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
li {
    margin-bottom: 3em;
}

p {
    font-size: 1em;
}

.title-wrapper {
    display: flex;
    align-items: center;
}

.version {
    background-color: $colourLight;
    width: fit-content;
    padding: 0.5em;
    color: white;
    border-radius: 1em;
    font-size: 1em;
    // display: inline-block;
    margin: 0 1em 0 0;
}

.title {
    // display: inline-block;
    margin: 0;
}
</style>
