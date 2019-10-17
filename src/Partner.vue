<template>
  <div class="photography-wrapper" v-scroll="listenedScrolled">
    <v-toolbar fixed class="tab-fix">
      <v-tabs
      centered
      show-arrows
      v-model="photo_item"
      @change="changePhoto"
    >

      <v-tab v-for="(item, i) in config.partner" :key="i" :href="item.url">
        {{item.name}}
      </v-tab>

    </v-tabs>
    </v-toolbar>
    
    <v-tabs-items v-model="photo_item">
      <v-tab-item
        value="hongguozhuo"
        transition="fade"
        reverse-transition="fade"
        lazy
      >
        <v-container>
          <v-layout row justify-space-between>
            <v-flex xs12>
              <water-fall v-bind:pushItems="innerItems"></water-fall>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>

      <v-tab-item
        value="guanyuan"
        transition="fade"
        reverse-transition="fade"
        lazy
      >
        <v-container>
          <v-layout row justify-space-between>
            <v-flex xs12>
              <water-fall v-bind:pushItems="innerItems"></water-fall>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>

      <v-tab-item
        value="simingwu"
        transition="fade"
        reverse-transition="fade"
        lazy
      >
        <v-container>
          <v-layout row justify-space-between>
            <v-flex xs12>
              <water-fall v-bind:pushItems="innerItems"></water-fall>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
    <partner-detail></partner-detail>
  </div>
  
</template>

<script>
import WaterFall from './components/WaterFall'
import itemFactory from './tools/ItemFactory'
import PartnerDetail from './components/PartnerDetail'
import config from '../config.js'


export default {
  components: {
    WaterFall,
    PartnerDetail
  },
  data() {
    return {
      photo_item:"tab-1", 
      innerItems:[],
      order: 1,
      config: config
    }
  },
  methods: {
    changePhoto() {
      window.scrollTo(0,0)
      this.$router.push(`#${this.photo_item}`)
      this.order=1
      this.innerItems=[].concat(itemFactory().get(this.order))
      window.scrollTo(0,0)
    },
    listenedScrolled() {
      this.scrolled=window.scrollY
      this.viewHeight=window.innerHeight
      this.bodyHeight=document.body.clientHeight
      if ( this.scrolled + this.viewHeight > (0.9*this.bodyHeight) ) {
        this.order += 1
        this.innerItems=this.innerItems.concat(itemFactory().get(this.order))
      }
    }
  },
  mounted() {
    this.order=1;
    this.innerItems=this.innerItems.concat(itemFactory().get(this.order))
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
</style>
