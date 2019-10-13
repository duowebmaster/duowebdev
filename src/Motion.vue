<template>
  <v-container class="motion-wrapper">
    <v-layout row wrap>
    <v-flex
      v-for="n in 9"
      :key="n"
    >
      <div class="video-wrapper">
        <v-hover>
        <v-card 
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 8 : 2}`"
          class="mx-auto"
          @click="goToVideo"
          >
          <v-img src="http://archexist.lianxiangmu.com/For8Hq2JJoh4agXntOV6xPKFQU5Y" height="200" width="300px"  contain>
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
               <v-icon>play_circle_outline</v-icon>
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text>
            <p class="card-text-style">Kangaroo Valley Safari</p>
          </v-card-text>
        </v-card>

         </v-hover>
      </div>
      
    </v-flex>
    </v-layout>
    <v-dialog v-model="showDialog" persistent max-width="960px">
       <v-btn
        flat
        dark
        fab
        color="pink"
        class="close-button"
        @click="closeVideo"
        >
        <v-icon>add</v-icon>
      </v-btn>
      <video ref="video" controls="" width="960px"  name="media">
        <source src="http://archexist.lianxiangmu.com/luHVR_A94s0IsPO3fF1fWWFGcG1z" type="video/mp4">
      </video>
    

    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    goToVideo() {
      this.showDialog = true
    },
    closeVideo() {
      this.$refs.video.pause();
      this.showDialog = false
    }
  }
}
</script>

<style scoped>
  .motion-wrapper{
    margin-top: 70px;
  }
  .video-wrapper{
    height: 300px;
    width: 340px;
    padding: 20px;
  }
  .card-text-title{
    font-size: 25px
  }

  .close-button{
    transform: rotate(45deg);
    right: 0px;
    position: absolute;
    margin-right: 10px;
    z-index: 10;
  }
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
  }
  .v-icon{
    color: white;
    font-size: 60px;
    cursor: pointer;
  }
</style>
