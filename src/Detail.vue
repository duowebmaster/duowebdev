<template>
  <v-dialog v-model="dialogShow" class="detail-dialog" v-if="dialogShow" scrollable persistent  max-width="70%">
    <v-card>
      <v-card-title>
        <span class="dialog-text">{{title}}</span>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="$store.commit('switchDetailDialogShow')">
              <v-icon>close</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </v-card-title>
      <v-layout row justify-space-between wrap fill-height >
        <v-flex xs8 fill-height>
          <v-container grid-list-xl  fill-height>
            <v-layout row justify-space-around fill-height>
              <v-flex  xs1>
              </v-flex>
              <v-flex xs10>
                <v-img  class="detail" 
                :src="selectedItem.src" 
                height="100%"
                contain ></v-img>
              </v-flex>
              <v-flex xs1>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex >
        <v-flex xs4>
          <detail-water-fall :displayedItems="displayedItems"></detail-water-fall>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import DetailWaterFall from './components/DetailWaterFall'
import { mapState } from 'vuex'
export default {
  props: ["displayedItems"],
  components: {
    DetailWaterFall
  },
  data() {
    return {
      photo_item:"tab-1"
    }
  },
  mounted() {
    this.photo_item=this.$route.hash.replace('#','')
  },
  watch: {
    '$route' (to, from) {
      this.photo_item=to.hash.replace('#','')
    }
  },
  computed: {
    ...mapState({
      dialogShow: state => state.dialogShow.detailDialogShow,
      selectedItem: state => state.selectedItem.selectedItem,
      selectedId: state => state.selectedItem.selectedId
    }),
    title() {
      return this.displayedItems.find(x => x.id == this.selectedId).title
    }
  }
}
</script>

<style scoped>
  .detail-wrapper{
    height: 800px;
    margin-top: 64px;
    overflow: hidden;
  }
  .header{
    position: fixed;
    top: 70px;
    right: 0;
    width: 700px;
    padding-top: 15px;
    height: 200px;
    background-color: #fafafac0;
    z-index: 10;
  }
  .nodisplay{
    display: none;
  }
  .view-wrapper{
    padding-top: 70px;
    max-width: 80%;
  }
  .time{
    padding-top: 0;
  }
  /* .fix{
    height: 100%;
  } */
  @media (max-width: 800px){

    .container {
      margin:0;
      width: 100%;
    }
    .view-wrapper{
      max-width: 100%;
    }
  }
  .dialog-text{
    font-size: 22px;
    padding-left: 50px;
  }
</style>
<style>
</style>
