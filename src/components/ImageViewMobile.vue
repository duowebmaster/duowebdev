<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="100%"
      height="100%"
      content-class="image_dialog"
      fullscreen
    >
      <v-carousel
        height="100%"
        interval="60000000000000000000"
        hide-delimiters
        active-class="image-active"
        @change="inputNewValue"
        ref="imageShow"
      >
        <v-carousel-item
          active-class="image-active"
          class="image-view-item"
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          contain
        >
        </v-carousel-item>
      </v-carousel>

      <div class="button-wrapper">
        <v-btn flat icon dark large color="black" @click="prevRoute">
          <v-icon dark>close</v-icon>
        </v-btn>
      </div>
      <v-card-text class="image-counter">{{currentIndex + 1}}/{{items.length}}</v-card-text>
    </v-dialog>
  </div>
</template>

<script>

export default {
  props: ["item"],
  data() {
    return {
      dialog: true,
      currentIndex: 1,
    }
  },
  methods:{
    inputNewValue(i) {
      this.currentIndex = i
    },
    prevRoute() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
  .image_dialog{
    height: 100% !important; 
    margin: 0;
    background-color: rgb(255, 255, 255);
  }

  .v-dialog__content{
    height: 100%;
  }
  .v-image__image--cover{
    background-size: auto;
  }
  .view-wrapper .v-image__image--cover{
    background-size: cover;
  }
  .v-carousel .v-window-item{
    height: 100% !important;
  }
  .v-carousel .v-window__container{
    height: 100% !important;
  }
  .v-carousel .v-window__container .v-carousel__item{
    height: 100% !important;
  }
  .v-carousel__controls{
    height:auto;
  }
  .image-counter{
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: gray;
    font-size: 16px;
  }
  .button-wrapper {
    position: absolute;
    bottom: 50px;
    width: 100%;
    text-align: center;
  }
</style>
