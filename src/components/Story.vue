<template>
  <div class="story-wrapper"  v-scroll="onScroll" v-resize="onResize">
    <v-container :class="{'story-inner-wrapper':!isStory}">
    <v-btn
      v-if="!displayList && !isStory"
      @click="showMenu"
      color="gray"
      dark
      absolute
      bottom
      right
      fab
    >
      <v-icon>menu</v-icon>
    </v-btn>
    <v-layout row wrap>
      <v-flex v-bind="{ [`xs12`]: isMobile&&isStory ,[`xs6`]: !isMobile&&isStory, [`xs3`]: !isStory }" v-for="(item, i) in this.config.story" :key="i">
      <div class="profile-wrapper">
        <v-hover>
        <v-card 
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 8 : 2}`"
          class="mx-auto"
          @click="toArticle(item.url)"
          :height="cardHeight"
          >
          <v-img :src="item.images[0]" 
            :height="height"></v-img>
          <v-card-text>
            <p class="card-text-style">{{item.title}}</p>
          </v-card-text>
        </v-card>

         </v-hover>
      </div>
    </v-flex>
    </v-layout>
  </v-container>
  <div class="placeholder" v-if="displayList && !isStory"></div>
  <router-view class="ifram-wrapper"></router-view>
  </div>

</template>

<script>
import config from "../../config.js";

export default {
  data() {
    return {
      displayList: true,
      isStory: true,
      renderedText:"",
      isMobile: false,
      config: config
    }
  },
  methods: {
    toArticle(dst) {
      this.$router.push(dst)
    },
    onScroll() {
      if (this.$route === "/story" || this.$route === "/story/"){
        this.displayList=false
        return
      }
      if (window.innerWidth < 1230) {
        this.displayList=false
        return
      }

      if(window.document.documentElement.scrollTop > 20) {
        this.displayList=false
        return
      }
      if(window.document.documentElement.scrollTop < 300) {
        this.displayList=true
        return
      }
    },
    onResize() {
       if (window.innerWidth < 1230 ) {
         this.displayList = false
         this.isMobile = true
       } else {
         this.isMobile = false
       }
    },
    showMenu() {
      window.scrollTo(0, 0)
    }
  },
  mounted() {
    if (this.$route.path == "/story"){
      this.isStory = true
    }
    if (this.$route.path == "/story/article/" || this.$route.path == "/story/article") {
      this.isStory = false
    }
    if (window.innerWidth < 1230){
      this.isMobile = true
    }
    document.querySelector("body").classList.add("story_body")
  },
  destroyed() {
    document.querySelector("body").classList.remove("story_body")
  },
  computed: {
    height() {
      if ( window.innerWidth < 1230) {
        return 200;
      }
      return this.isStory? 400: 200;
    },
    cardHeight() {
      return this.isStory? null: 280;
    },
    mobileShow() {
      return !( window.innerWidth < 1231 && this.$route.path.indexOf('/story/article') !== -1)
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path == "/story/" || to.path == "/story") {
        this.isStory = true
      }
      if (to.path == "/story/article/") {
        this.isStory = false
      }

    }
  }
}
</script>

<style scoped>
  .story-wrapper{
    width: 100%;
    height: 100%;
    padding-top: 65px;
  }
  @media(max-width: 960px){
    .story-wrapper{
      padding-top: 58px;
    }
  }
  .profile-wrapper{
    padding: 10px 20px;
  }
  @media (min-width: 1920px) {
    .v-btn{
      right: 30%;
      bottom: -20%;
    }
  }  
  @media (max-width: 1230px) {
    .story-inner-wrapper{
      display:none
    }
  }
  .v-btn{
    bottom: -20%;
  }
  .card-text-style {
    font-size: 18px;
    margin-bottom: 0px;
  }
  .iframe-wrapper{
    height: 110%;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: 0px;
  }
  .placeholder {
    position: absolute;
    top: 300px;
    height: 100%;
    width: 100%;
  }
  iframe .appmsg_skin_default .rich_media_area_primary  {
    background-color: transparent !important ;
  }
</style>
