<template>
  <div class="mobile-top-bar">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      transition="slide-y-transition"
      :height="'auto'"
      :width="width+'px'"
    >
      <v-toolbar flat height="30" :class="{'before-scrolled': !scrolled&&isIndex}">
        <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title class="mobile">
          <b>DUO</b>建筑影像
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list-tile>
        <router-link style="z-index: 1000" to="/">
          <v-card-text class="header">HOME</v-card-text>
        </router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link style="z-index: 1000" to="/photography">
          <v-list-tile-title>PHOTOGRAPHY</v-list-tile-title>
        </router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link style="z-index: 1000" to="/motion">
          <v-list-tile-title>MOTION</v-list-tile-title>
        </router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link style="z-index: 1000" to="/partner">
          <v-list-tile-title>PARTNER</v-list-tile-title>
        </router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link style="z-index: 1000" to="/client">
          <v-list-tile-title>CLIENT</v-list-tile-title>
        </router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link style="z-index: 1000" to="/story">
          <v-list-tile-title>STORY</v-list-tile-title>
        </router-link>
      </v-list-tile>
      <v-list-tile>
        <router-link style="z-index: 1000" to="/team">
          <v-list-tile-title>ABOUT & CONTACT</v-list-tile-title>
        </router-link>
      </v-list-tile>
    </v-navigation-drawer>
    <v-toolbar fixed height="30" :class="{'before-scrolled': !scrolled&&isIndex}">
      <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="mobile">
        <b>DUO</b>建筑影像
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
import _ from "lodash";
import config from "../../config.js";

export default {
  data() {
    return {
      scrolled: false,
      drawer: null,
      isIndex: true,
      height: 0,
      width: 0,
      config: config
    };
  },
  methods: {
    listendScrolled(e) {
      let scroll = window.scrollY;
      if (scroll > 100) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    handleRouteChange() {
      if (this.$route.path == "/") {
        this.isIndex = true;
      } else {
        this.isIndex = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", _.throttle(this.listendScrolled, 100));
    this.handleRouteChange();
    this.width = window.innerWidth;
  }
};
</script>

<style>
.mobile.v-toolbar__title {
  margin-left: -18px;
}
.sub-drawer {
  background: rgba(221, 221, 221, 0.4);
}
.sub-drawer .v-list__tile__title {
  font-size: 12px;
}
.before-scrolled.v-toolbar {
  background: rgba(221, 221, 221, 0.4);
  webkit-box-shadow: none;
  box-shadow: none;
}
.mobile-top-bar a {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.mobile-top-bar a > .v-list__tile__title {
  text-align: center;
}
.mobile-top-bar .v-list__group__header > div {
  padding-left: 56px;
}
.mobile-top-bar .v-list__group__header > .v-list__group__header__append-icon {
  padding: 0 16px;
}
</style>
