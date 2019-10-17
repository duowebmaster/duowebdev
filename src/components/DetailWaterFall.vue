<template>
  <div class="detail-waterfall" >
    <waterfall :line-gap="150" :watch="items"  >
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        class="detail-waterfall-slot"
        v-for="(item, index) in items"
        :width="item.width"
        :height="item.height"
        :order="item.index"
        :key="index"
      > 
        <v-img :src="item.src" :height="item.height" :class="{detail_active: item.id === selectedItem.id}" contain @click="selectImg(item)"/>
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<script>
import Waterfall from "vue-waterfall/lib/waterfall"
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot"
import {mapState} from 'vuex'
import _ from 'lodash'
export default {
  data() {
    return {
      showItems:[],
      scrolled: 0,
      viewHeight: 0,
      bodyHeight: 0,
      maxHeight: 0,
    }
  },
  components: {
    Waterfall,
    WaterfallSlot
  },
  computed: {
    width: function() {
      return window.innerWidth/4
    },

    ...mapState({
      items: state => state.projectItems.projectItems,
      selectedItem: state => state.selectedItem.selectedItem
    }),

  },
  methods:{
    throttleScrolled() {
      return null
    },
    justiMaxHeight() {
      this.maxHeight = window.innerHeight - 300;
    },
    selectImg(item) {
      this.$store.commit("changeItem", item)
    }
  },
  mounted() {
    this.showItems=this.items;
    this.showItems.map( v =>{
        v.height = v.height * 140 / v.width
        v.width = 140
      }
    )
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.throttleScrolled)
  }
}
</script>

<style scoped>
  .vue-waterfall-slot{
    padding: 5px 5px;
  }
  .vue-waterfall{
    max-width: 600px;
    min-width: 300px;
  }
  .detail-waterfall{
    display: block;
    overflow: auto;
    min-height: 300px;
    max-height: 700px;
    min-width: 300px;
  }
  @media(max-height:970px) {
    .detail-waterfall{
      max-height: 700px;
    }
  }
  .detail-waterfall-slot{
    cursor: pointer;
  }
</style>
