<template>
  <div class="top-bar">
    <v-toolbar fixed :class="{'before-scrolled': !scrolled&&isIndex}">
      <v-container class="main-nav nav" fluid grid-list-xl>
        <v-layout row justify-space-between>
          <v-flex>
            <router-link style="z-index: 1000" to="/">
              <v-img id="logo" :src="config.logo.src" :style="config.logo.style" />
            </router-link>
          </v-flex>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-flex width="500px">
            <v-container class="nav" fluid grid-list-xl>
              <v-layout row justify-space-between>
                <v-flex class="nav-major-item">
                  <router-link style="z-index: 1000" to="/">
                    <v-card-text class="header">HOME</v-card-text>
                  </router-link>
                </v-flex>
                <v-flex class="nav-major-item">
                  <v-menu open-on-hover offset-y>
                    <template v-slot:activator="{ on }">
                      <v-card-text v-on="on" class="header">
                        PHOTOGRAPHY
                        <v-icon color="black">keyboard_arrow_down</v-icon>
                      </v-card-text>
                    </template>
                    <v-list :class="{'before-scrolled': !scrolled&&isIndex}" class="down-menu">
                      <v-list-tile>
                        <router-link style="z-index: 1000" to="/photography/#architecture">
                          <v-list-tile-title>ARCHITECTURE</v-list-tile-title>
                        </router-link>
                      </v-list-tile>
                      <v-list-tile>
                        <router-link style="z-index: 1000" to="/photography/#urban">
                          <v-list-tile-title>URBAN</v-list-tile-title>
                        </router-link>
                      </v-list-tile>
                      <v-list-tile>
                        <router-link style="z-index: 1000" to="/photography/#landscape">
                          <v-list-tile-title>LANDSCAPE</v-list-tile-title>
                        </router-link>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </v-flex>
                <v-flex class="nav-major-item">
                  <router-link style="z-index: 1000" to="/motion">
                    <v-card-text class="header">MOTION</v-card-text>
                  </router-link>
                </v-flex>
                <v-flex class="nav-major-item">
                  <v-menu open-on-hover offset-y>
                    <template v-slot:activator="{ on }">
                      <v-card-text v-on="on" class="header">
                        PARTNER
                        <v-icon color="black">keyboard_arrow_down</v-icon>
                      </v-card-text>
                    </template>

                    <v-list :class="{'before-scrolled': !scrolled&&isIndex}" class="down-menu">
                      <v-list-tile v-for="(item, i) in this.config.partner" :key="i">
                        <router-link style="z-index: 1000" :to="`/partner/${item.url}`">
                          <v-list-tile-title>{{item.name}}</v-list-tile-title>
                        </router-link>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </v-flex>
                <v-flex class="nav-major-item">
                  <router-link style="z-index: 1000" to="/client">
                    <v-card-text class="header">CLIENT</v-card-text>
                  </router-link>
                </v-flex>
                <v-flex class="nav-major-item">
                  <router-link style="z-index: 1000" to="/story">
                    <v-card-text class="header">STORY</v-card-text>
                  </router-link>
                </v-flex>
                <v-flex class="nav-major-item">
                  <router-link style="z-index: 1000" to="/team">
                    <v-card-text class="header">ABOUT & CONTACT</v-card-text>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
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
      isIndex: true,
      config: config
    };
  },
  methods: {
    listendScrolled(e) {
      scroll = window.scrollY;
      if (scroll > 100) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    toPhotography() {
      this.$router.push({ path: "photography" });
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
  },
  watch: {
    $route: "handleRouteChange"
  }
};
</script>
<style scoped>
.main-nav {
  height: 64px;
  z-index: 1024;
  padding: 0px;
}

.nav {
  height: 64px;
  z-index: 1024;
  padding: 0px;
  color: black;
  /* position: fixed; */
}
.nav-major-item {
  height: 64px;
  padding: 0 0;
  color: black;
}
.nav-major-item > .header {
  height: 64px;
}
.header {
  font-size: 18px;
  font-weight: 400;
  background-color: none !important;
  z-index: 1000;
  color: black;
  padding: 16px;
}
/* .v-list{
  margin-top: 50px;
} */

.v-list__tile__title {
  color: black;
}
.before-scrolled.v-list {
  background-color: rgba(221, 221, 221, 0.6);
}
/* .flex{
  padding: 0px !important
} */
.container.grid-list-xl .layout .flex {
  padding: 0;
}
.container.grid-list-xl .layout:only-child {
  margin: 0;
}
.before-scrolled.v-toolbar {
  background: rgba(221, 221, 221, 0.6);
  webkit-box-shadow: none;
  box-shadow: none;
}
div.v-card__text.header {
  cursor: default;
}
a > div.v-card__text.header {
  cursor: pointer;
}
.indigo {
  /* background-color: #3f51b5 !important; */
  /* border-color: #3f51b5 !important; */
  background: linear-gradient(rgba(125, 125, 125, 1), rgba(0, 0, 0, 0));
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: none;
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: none;
}
.v-toolbar__content {
  padding: 0;
  height: 46px;
}
.down-menu .head-list {
  background: transparent;
  font-size: 20px;
  font-weight: 300;
}
</style>
