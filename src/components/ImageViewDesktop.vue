<template>
  <div class="main">
    <v-layout row>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{item.title}}</div>
            <span class="grey--text">{{item.description}}</span>
          </div>
        </v-card-title>
        <Lingallery class="inner" v-if="item" :items="item.detail" :width="800" />
      </v-card>
    </v-layout>
  </div>
</template>


<script>
import Lingallery from "lingallery";

export default {
  props: ["item"],
  components: {
    Lingallery
  }
};
</script>

<style>
.inner {
  margin: auto;
  left: 0;
  right: 0;
}
.v-dialog {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
</style>