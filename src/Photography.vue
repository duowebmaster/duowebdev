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
              <water-fall ref="arch" v-bind:pushItems="photography_items"></water-fall>
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
              <water-fall ref="urban" v-bind:pushItems="photography_items"></water-fall>
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
              <water-fall ref="landscape" v-bind:pushItems="photography_items"></water-fall>
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
import itemFactory from './tools/ItemFactory'
import {mapState} from 'vuex'
import projects from './projects/projects';
export default {
  components: {
    WaterFall,
    Detail
  },
  data() {
    return {
      photo_item:"tab-1",
      items: ['architecture','urban', 'landscape'],
      order: 1,
      photography_items: [],
    }
  },
  methods: {
    changePhoto() {
      console.log(this.photo_item)
      this.$router.push(`#${this.photo_item}`)
      this.order=1
      this.photography_items=[].concat(itemFactory().get(this.order))
      window.scrollTo(0,0)
    },
    listenedScrolled() {
      this.scrolled=window.scrollY
      this.viewHeight=window.innerHeight
      this.bodyHeight=document.body.clientHeight
      if ( this.scrolled + this.viewHeight > (0.9*this.bodyHeight) ) {
        this.order += 1
        this.photography_items=this.photography_items.concat(itemFactory().get(this.order))
      }
    }
  },
  mounted() {
    this.order=1;
    this.photography_items=this.photography_items.concat(itemFactory().get(this.order))
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
      return projects.find(x => x.id == this.$route.hash.replace('#','')).title
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
