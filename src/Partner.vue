<template>
  <div class="photography-wrapper" v-scroll="listenedScrolled">
    <v-toolbar fixed class="tab-fix">
      <v-tabs
      centered
      show-arrows
      v-model="tab"
      @change="switchTab"
    >

      <v-tab v-for="(item, i) in config.partner" :key="i" :href="item.url">
        {{item.name}}
      </v-tab>

    </v-tabs>
    </v-toolbar>
    
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item, i) in config.partner"
        :key="i"
        :value="item.url.replace('#', '')"
        transition="fade"
        reverse-transition="fade"
        lazy
      >
        <v-container>
          <v-layout row justify-space-between>
            <v-flex xs12>
              <water-fall v-bind:pushItems="displayedItems"></water-fall>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
    <partner-detail :displayedItems="displayedItems"></partner-detail>
  </div>
  
</template>

<script>
import WaterFall from './components/WaterFall'
import PartnerDetail from './components/PartnerDetail'
import config from '../config.js'


export default {
  components: {
    WaterFall,
    PartnerDetail
  },
  data() {
    return {
      tab:"tab-1", 
      displayedItems: [],
      config: config,
      partner: null
    }
  },
  methods: {
    switchTab() {
      window.scrollTo(0,0)
      this.$router.push(`#${this.tab}`)
      this.partner = this.getPartner();
      this.displayedItems=this.partner.projects
      window.scrollTo(0,0)
    },
    listenedScrolled() {

    },
    getPartner() {
      for(let i=0; i<this.config.partner.length; i++) {
        if(this.config.partner[i].url == this.$route.hash) {
          return this.config.partner[i];
        }
      }
    },
    load() {
      this.partner = this.getPartner();
      this.displayedItems = this.partner.projects;
      this.tab=this.$route.hash.replace('#','')
    }
  },
  mounted() {
    this.load()
  },
  watch: {
    '$route' () {
      this.load()
    }
  }
}
</script>

<style scoped>
  .photography-wrapper{
    margin-top: 100px;
  }
</style>
