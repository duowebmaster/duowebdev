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
    <v-tabs-items v-model="photo_item">
      <v-tab-item
        value="architecture"
        transition="fade"
        reverse-transition="fade"
        lazy
      >
        <v-container>
          <v-layout row justify-space-between>
            <v-flex xs12>
              <water-fall ref="arch" v-bind:pushItems="displayedItems"></water-fall>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item
        value="urban"
        transition="fade"
        reverse-transition="fade"
        lazy
      >
        <v-container>
          <v-layout row justify-space-between>
            <v-flex xs12>
              <water-fall ref="urban" v-bind:pushItems="displayedItems"></water-fall>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item
          value="landscape"
          transition="fade"
          reverse-transition="fade"
          lazy
        >
        <v-container>
          <v-layout row justify-space-between>
            <v-flex xs12>
              <water-fall ref="landscape" v-bind:pushItems="displayedItems"></water-fall>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
    
    <detail></detail>
  </div>
  
</template>

<script>
import WaterFall from './components/WaterFall'
import Detail from './Detail'
import {mapState} from 'vuex'
import config from "../config.js"

export default {
  components: {
    WaterFall,
    Detail
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
      let more = Math.min(this.items.length, 10);
      for (let i=0; i<more; i++) {
        this.displayedItems.push(this.items.pop())
      }
      window.scrollTo(0,0)
    },
    listenedScrolled() {
      this.scrolled=window.scrollY
      this.viewHeight=window.innerHeight
      this.bodyHeight=document.body.clientHeight
      if ( this.scrolled + this.viewHeight > (0.9*this.bodyHeight) ) {
        let more = Math.min(this.items.length, 10);
        for (let i=0; i<more; i++) {
          this.displayedItems.push(this.items.pop())
        }
      }
    }
  },
  mounted() {
    for(let i=0; i<config.partner.length; i++) {
      this.items = this.items.concat(config.partner[i].projects);
    }
    this.items = this.items.reverse();
    this.photo_item=this.$route.hash.replace('#','')
  },
  watch: {
    '$route' (to, from) {
      this.photo_item=to.hash.replace('#','')
    }
  },
  computed: {
    ...mapState({
      dialogShow: state => state.dialogShow.detailDialogShow,
      selectedItem: state => state.selectedItem.selectedItem,
    }),
    title() {
      return this.displayedItems.find(x => x.id == this.$route.hash.replace('#','')).title
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
