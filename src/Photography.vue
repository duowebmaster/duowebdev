<template>
  <div class="photography-wrapper">
    <v-toolbar fixed class="tab-fix">
      <v-tabs centered show-arrows v-model="tabName" @change="switchTab">
        <v-tab v-for="(item, i) in config.photography" :key="i" :href="item.url">{{item.name}}</v-tab>
      </v-tabs>
    </v-toolbar>

    <MyWaterFall :items="displayedItems"></MyWaterFall>
  </div>
</template>

<script>
import MyWaterFall from "./components/WaterFall";
import config from "../config.js";

export default {
  components: {
    MyWaterFall
  },
  data() {
    return {
      tabName: "",
      displayedItems: [],
      config: config,
      tab: undefined
    };
  },
  methods: {
    switchTab() {
      this.$router.push(`#${this.tabName}`);
    },
    getTab() {
      for (let i = 0; i < this.config.photography.length; i++) {
        if (this.config.photography[i].url == this.$route.hash) {
          return this.config.photography[i];
        }
      }
    },
    load() {
      this.tab = this.getTab();
      this.displayedItems = this.tab.projects;
      this.tabName = this.$route.hash.replace("#", "");
    }
  },
  mounted() {
    if (this.$route.hash == "") {
      this.$router.push({ hash: this.config.photography[0].url });
    }
    this.load();
  },
  watch: {
    $route() {
      if (this.$route.hash == "") {
        this.$router.push({ hash: this.config.photography[0].url });
      }
      this.load();
    }
  }
};
</script>

<style scoped>
.photography-wrapper {
  margin-top: 100px;
}
</style>
