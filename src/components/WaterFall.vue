<template>
  <div>
    <v-dialog v-model="dialog" :width="800">
      <ImageViewDesktop v-if="selectedItem" :item="selectedItem"></ImageViewDesktop>
    </v-dialog>
    <Waterfall :gutterWidth="20" :gutterHeight="20" v-if="displayedItems.length != 0">
      <WaterfallItem v-for="(item, index) in displayedItems" :width="360" :key="index">
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 8 : 2}`"
            class="mx-auto"
            @click="goToDetail(item)"
          >
            <v-img :src="item.cover" contain />
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
import { Waterfall, WaterfallItem } from "vue2-waterfall";
import ImageViewDesktop from "./ImageViewDesktop";

import _ from "lodash";

export default {
  props: ["items"],
  data() {
    return {
      selectedItem: undefined,
      dialog: false
    };
  },
  components: {
    Waterfall,
    WaterfallItem,
    ImageViewDesktop
  },
  computed: {
    displayedItems() {
      return this.items;
    }
  },
  loaded() {},
  methods: {
    goToDetail(item) {
      this.selectedItem = item;
      if (!this.selectedItem.transformed) {
        this.selectedItem.detail = item.detail.map(x => {
          return {
            thumbnail: x,
            src: x
          };
        });
        this.selectedItem.transformed = true;
      }
      this.dialog = true;
    }
  },
  watch: {
    dialog(from, to) {
      if (to === true) {
        this.selectedItem = undefined;
      }
    }
  }
};
</script>

<style>
.vue-waterfall-slot {
  padding: 10px 20px;
}
.v-card__text {
  padding: 1em;
}

.card-head {
  font-size: 16px;
}
@media (max-width: 414px) {
  .vue-waterfall {
    margin-left: 8px;
  }
  .v-card__text {
    padding: 10px;
  }
  .card-head {
    font-size: 10px;
  }
  .vue-waterfall-slot {
    padding: 5px 10px;
  }
}
</style>
