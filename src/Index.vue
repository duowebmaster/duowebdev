<template>
  <div  v-scroll="listenedScrolled">
    <carousal/>
    <div :style="holderStyle" class="holder-div"></div>
    <v-content>
    <v-container>    
      <v-layout row justify-space-between>
        <v-flex xs12>
          <water-fall v-bind:pushItems="items"></water-fall>
        </v-flex>
      </v-layout>
    </v-container>
    </v-content>
    <detail></detail>
  </div>
</template>

<script>
import Carousal from './components/Carousal'
import WaterFall from './components/WaterFall'
import Detail from './Detail'
import itemFactory from './tools/ItemFactory'
export default {
  components: {
    Carousal,
    WaterFall,
    Detail
  },
  data() {
    return {
      items: [],
      order: 1
    }
  },
  computed: {
    fullHeight() {
      return window.innerHeight
    },
    holderStyle() {
      return {
        height: this.fullHeight + 'px',
      }
    },
    
  },
  mounted() {
    this.items=this.items.concat(itemFactory().get(this.order))
  },
  methods: {
    listenedScrolled() {
      this.scrolled=window.scrollY
      this.viewHeight=window.innerHeight
      this.bodyHeight=document.body.clientHeight
      if ( this.scrolled + this.viewHeight > (0.9*this.bodyHeight) ) {
        this.order += 1
        this.items=this.items.concat(itemFactory().get(this.order))
      }
    }
  }
}
</script>

<style>

@media (max-width: 1025px) {
  .holder-div{
    display: none;
  }
}
@media (min-width: 1026px) {
  .holder-div{
    display: block;
  }
}
.v-content__wrap{
  background-color: #fafafa;
}
</style>
