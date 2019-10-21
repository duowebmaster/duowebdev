<template>
  <v-container class="view-wrapper">
    <v-layout>
      <v-flex xs12>
        <v-flex xs12 class="header-flex">
          <p class="client-header">PROFILE</p>
        </v-flex>
        <v-container>
          <v-layout row justify-space-between wrap fill-height>
            <v-flex xs12>
              <p class="intro" :style="this.config.profile.content.style">{{this.content}}</p>
            </v-flex>
          </v-layout>
        </v-container>
        <v-flex xs12 class="header-flex">
          <p class="client-header">CLIENTS</p>
        </v-flex>
        <v-container style="text-align: center">
          <v-layout row justify="center">
            <v-img
              :src="this.config.profile.clients.src"
              :style="this.config.profile.clients.style"
            />
          </v-layout>
          <!-- <v-layout row justify-space-between wrap fill-height>
            <v-flex v-bind="{[`xs4`]:!isMobile,[`xs6`]:isMobile}" style="text-align: center">
              <img
                :src="this.config.profile.clients.src"
                :style="this.config.profile.clients.style"
              />
            </v-flex>
          </v-layout>-->
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import config from "../config.js";
import Axios from "axios";

export default {
  data() {
    return {
      isMobile: true,
      config: config
    };
  },
  asyncComputed: {
    content: {
      get() {
        return Axios.get(config.profile.content.src)
          .then(rsp => {
            if (rsp.status >= 200 && rsp.status < 300) {
              return rsp.data;
            } else {
              return "Network Error";
            }
          })
          .catch(err => {
            return err;
          });
      },
      default: ""
    }
  }
};
</script>

<style scoped>
.view-wrapper {
  margin-top: 70px;
}
p {
  margin: 0;
  font-size: 18px;

  line-height: 50px;
}
p.client {
  text-align: center;
}

p.client-header {
  text-align: center;
  font-size: 20px;
  font-weight: 500px;
  margin-bottom: 20px;
  /* border-bottom: 5px solid black; */
}
p.client-header::before {
  display: none;
}
.header-flex {
  margin-top: 50px;
}
p.header_line {
  background-color: black;
  display: inline-block;
  height: 5px;
  width: 30%;
}
.intro {
  text-indent: 2em;
}
@media (max-width: 700px) {
  p.client {
    font-size: 16px;
  }
  .intro {
    padding: 0 10px;
    text-indent: 36px;
  }
}
</style>
