<template>
  <Layout class="home">
    <h3>{{$page.content.title}}</h3>
    <logo id="logo"/>
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
export default {
  components: {
    Logo
  }
};
</script>



<style lang="scss">
#logo {
  width: 100%;
  g {
    stroke: white;
  }
}
</style>