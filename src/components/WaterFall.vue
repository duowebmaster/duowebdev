<template>
  <div>
    <waterfall :line-gap="gap" :watch="items" v-resize="justifyCard" v-scroll="justifyCard">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width + widthHolder"
        :height="item.height + heightHolder"
        :order="index"
        :key="index"
      >
      <v-hover>
        <v-card 
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 8 : 2}`"
          class="mx-auto"
          @click="goToDetail(item.id)"
          >
          <v-img :src="item.cover" :height="item.height" contain/>
          <v-card-text>
              <p class="card-head mb-0">{{item.title}}</p>
          </v-card-text>
          </v-card>
        </v-hover>
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<script>
import Waterfall from "vue-waterfall/lib/waterfall"
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot"
import _ from 'lodash'
import projectDetail from '../projects/projectDetail';
export default {
  props: ['pushItems'],
  data() {
    return {
      scrolled: 0,
      initHeight: 0,
      bodyHeight: 0,
      widthHolder: 40,
      order: 1,
      heightHolder: 76,
      gap: 400,
      scale_ratio: 1,
    }
  },
  components: {
    Waterfall,
    WaterfallSlot
  },
  created(){
    console.log(this.pushItems)
  },
  computed: {
    items() {
      return this.pushItems
    }
  },
  updated() {
    this.justifyCard()
  },
  methods:{
    listendScrolled() {
      // this.scrolled=window.scrollY
      // this.viewHeight=window.innerHeight
      // this.bodyHeight=document.body.clientHeight
      // if ( this.scrolled + this.viewHeight > (0.9*this.bodyHeight) ) {
      //   this.order += 1
      //   this.items=this.items.concat(itemFactory().get(this.order))`
      // }
    },
    throttleScrolled() {
      return null
    },
    throttleResize() {
      return null
    },
    
    goToDetail(id){
      this.$store.commit("changeProjectItems", projectDetail.find(x=> x.id == id).details)
      this.$store.commit("changeSelectedId", id)
      this.$store.commit("changeItem", projectDetail.find(x=> x.id == id).details[0])
      if(window.innerWidth > 800){
        this.$store.commit("switchDetailDialogShow")
      } else {
        this.$router.push('/view')
      }
      
    },
    justifyCard() {
      let currentInnerWidth = window.innerWidth;
      if (currentInnerWidth < 820) {
        this.scale_ratio = Math.floor(currentInnerWidth / 820 * 1000 - 5) / 1000;  
      }
      if (currentInnerWidth > 820) {
        this.scale_ratio = 1
      }

      this.items.map(v => {
        //v.width=768;
        v.initHeight=v.height;
        v.height = (v.height * 360 / v.width);
        v.initHeight = v.height;
      })

      // 针对 iPhoneX 优化
      if (currentInnerWidth == 375) {
        this.gap = 180
        this.items.map(v => {
          v.height = v.initHeight* 160/360
          v.width = 160
        })
        this.widthHolder = 20
        this.heightHolder = 45
        return 0
      } 
        
      this.gap = 400 * this.scale_ratio
      this.items.map(v => {
        v.height = v.initHeight * this.scale_ratio
        v.width = 360 * this.scale_ratio
      })
    }
  },
  mounted() {
    this.justifyCard()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.throttleScrolled)
    window.removeEventListener('resize', this.throttleResize)
  }
}
</script>

<style>
  .vue-waterfall-slot{
    padding: 10px 20px;
  }
  .v-card__text{
    padding: 1em;
  }

  .card-head{
    font-size: 16px;
  }
  @media (max-width: 414px) {
    .vue-waterfall{
      margin-left: 8px;
    }
    .v-card__text{
      padding: 10px;
    }
    .card-head{
      font-size: 10px;
    }
    .vue-waterfall-slot{
      padding: 5px 10px;
    }
  }
</style>
