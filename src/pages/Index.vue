<template>
  <Layout id="landing">
    <h1>{{$page.content.title}}</h1>
    <logo id="logo"/>
    <download />
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
import Logo from "~/assets/images/Snafu.svg";
import Download from "~/components/landing/Download.vue";
export default {
  components: {
    Logo,
    Download
  }
};
</script>



<style lang="scss">
#landing {
  text-align: center;
}

#logo {
  width: 80%;
  max-width: 500px;
  g {
    stroke: white;
  }
}

h1{
  text-transform: uppercase;
}
</style>