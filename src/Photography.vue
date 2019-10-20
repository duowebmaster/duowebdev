<template>
  <div class="photography-wrapper" v-scroll="listenedScrolled">
    <v-toolbar fixed class="tab-fix">
    <v-tabs
      centered
      show-arrows
      v-model="photo_item"
      @change="changePhoto"
    >
      <v-tab
        href="#architecture"
      >
      Architecture
      </v-tab>
      <v-tab
        href="#urban"
      >
      Urban
      </v-tab>
      <v-tab
        href="#landscape"
      >
      Landscape
      </v-tab>

    </v-tabs>
    </v-toolbar>
    <MyWaterFall :items="displayedItems"></MyWaterFall>
  </div>
  
</template>

<script>
import MyWaterFall from './components/WaterFall'
import config from "../config.js"

export default {
  components: {
    MyWaterFall
  },
  data() {
    return {
      photo_item:"tab-1",
      tabs: ['architecture','urban', 'landscape'],
      items: [],
      displayedItems: [],
      config: config
    }
  },
  methods: {
    changePhoto() {
      this.$router.push(`#${this.photo_item}`)
      window.scrollTo(0,0)
    },
    listenedScrolled() {
    }
  },
  mounted() {
    for(let i=0; i<config.partner.length; i++) {
      this.items = this.items.concat(config.partner[i].projects);
    }
    this.displayedItems = this.items;
    this.photo_item=this.$route.hash.replace('#','')
  },
  watch: {
    '$route' (to, from) {
      this.photo_item=to.hash.replace('#','')
    }
  }
}
</script>

<style scoped>
  .photography-wrapper{
    margin-top: 100px;
  }
  .dialog-text{
    font-size: 22px;
    padding-left: 50px;
  }


</style>
<style>
  .v-dialog__content > .v-dialog{
    height: 780px;
  }
</style>
