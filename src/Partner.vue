<template>
  <div class="photography-wrapper">
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
    
    <MyWaterFall :items="displayedItems"></MyWaterFall>
  </div>
  
</template>

<script>
import MyWaterFall from './components/WaterFall'
import config from '../config.js'


export default {
  components: {
    MyWaterFall
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
      this.$router.push(`#${this.tab}`)
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
