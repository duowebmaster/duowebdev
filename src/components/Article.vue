<template>
  <div class="article-wrapper">
    <iframe :src="url"></iframe>
  </div>

</template>

<script>
export default {
  data() {
    return {
      text:"",
      url: "",
      renderedText:""
    }
  },
  mounted() {
    this.url=`http://article.duo-visual.com/${this.$route.hash.replace('#','')}/${this.$route.hash.replace('#','')}.html`
    if (window.innerWidth > 1230) {
      window.scrollTo(0, 300)
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path.indexOf("/story/article") != -1) {
        this.url=`http://article.duo-visual.com/${this.$route.hash.replace('#','')}/${this.$route.hash.replace('#','')}.html`
      }
    }
  }
}
</script>

<style>
  .article-wrapper{
    width: 100%;
    height: 100%;

  }
  iframe {
    width: 100%;
    height: 100%;
    border: 0px;
  }
  iframe .appmsg_skin_default .rich_media_area_primary  {
    background-color: transparent !important ;
  }
</style>
