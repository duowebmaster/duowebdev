<template>
  <div>
    <Waterfall :gutterWidth="20" :gutterHeight="20" v-if="displayedItems.length != 0">
      <WaterfallItem
        v-for="(item, index) in displayedItems"
        :width="360"
        :key="index"
      >
      <v-hover>
        <v-card 
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 8 : 2}`"
          class="mx-auto"
          @click="goToDetail(item.id)"
        >
          <v-img :src="item.cover" contain/>
          <v-card-text>
              <p class="card-head mb-0">{{item.title}}</p>
          </v-card-text>
          </v-card>
        </v-hover>
      </WaterfallItem>
    </Waterfall>
  </div>
</template>

<script>
import {Waterfall, WaterfallItem} from 'vue2-waterfall';

import _ from 'lodash'
import projectDetail from '../projects/projectDetail';

export default {
  props: ['items'],
  components: {
    Waterfall,
    WaterfallItem
  },
  computed: {
    displayedItems() {
      return this.items;
    }
  },
  methods:{
    goToDetail(id){
      this.$store.commit("changeProjectItems", projectDetail.find(x=> x.id == id).details)
      this.$store.commit("changeSelectedId", id)
      this.$store.commit("changeItem", projectDetail.find(x=> x.id == id).details[0])
      if(window.innerWidth > 800){
        this.$store.commit("switchDetailDialogShow")
      } else {
        this.$router.push('/view')
      }
    }
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
