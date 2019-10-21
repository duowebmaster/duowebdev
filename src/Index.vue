<template>
  <div v-scroll="listenedScrolled">
    <carousal />
    <div :style="holderStyle" class="holder-div"></div>
    <v-content>
      <v-container>
        <v-layout row justify-space-between>
          <v-flex xs12>
            <MyWaterFall :items="displayedItems"></MyWaterFall>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Carousal from "./components/Carousal";
import MyWaterFall from "./components/WaterFall";
import config from "../config.js";

export default {
  components: {
    Carousal,
    MyWaterFall
  },
  data() {
    return {
      items: [],
      displayedItems: []
    };
  },
  computed: {
    fullHeight() {
      return window.innerHeight;
    },
    holderStyle() {
      return {
        height: this.fullHeight + "px"
      };
    }
  },
  mounted() {
    for (let i = 0; i < config.partner.length; i++) {
      this.items = this.items.concat(config.partner[i].projects);
    }
    this.items = this.items.reverse();
    let more = Math.min(this.items.length, 10);
    for (let i = 0; i < more; i++) {
      this.displayedItems.push(this.items.pop());
    }
  },
  methods: {
    listenedScrolled() {
      this.scrolled = window.scrollY;
      this.viewHeight = window.innerHeight;
      this.bodyHeight = document.body.clientHeight;
      if (this.scrolled + this.viewHeight > 0.9 * this.bodyHeight) {
        let more = Math.min(this.items.length, 10);
        for (let i = 0; i < more; i++) {
          this.displayedItems.push(this.items.pop());
        }
      }
    }
  }
};
</script>

<style>
@media (max-width: 1025px) {
  .holder-div {
    display: none;
  }
}
@media (min-width: 1026px) {
  .holder-div {
    display: block;
  }
}
.v-content__wrap {
  background-color: #fafafa;
}
</style>
