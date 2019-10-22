<template>
  <div>
    <v-carousel hide-delimiters class="fixed-carousel">
      <v-carousel-item v-for="(item,i) in config.slides" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import config from "../../config.js";

export default {
  data() {
    return {
      config: config
    };
  },
  methods: {
    goToDetail() {
      this.$router.push("detail");
    }
  },
  computed: {
    fullHeight() {
      if (window.innerWidth > 1025) {
        return window.innerHeight;
      } else {
        return 500;
      }
    }
  }
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
@media (min-width: 1026px) {
  .fixed-carousel {
    z-index: 0;
    position: fixed;
  }
  .v-carousel {
    height: 100vh !important;
  }
}
@media (max-width: 1025px) {
  /* .fixed-carousel{
    z-index: 0;
    position: fixed;
  } */
  .v-carousel {
    height: 30vh !important;
  }
}

.fullHeight {
  height: 100%;
  color: white;
}
a {
  display: block;
  width: 100%;
}
h1 {
  text-align: center;
  display: block;
  width: 100%;
  color: rgb(199, 198, 198);
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.5);
}
h4 {
  color: white;
}
</style>
