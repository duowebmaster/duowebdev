<template>
  <v-dialog v-model="dialogShow" class="detail-dialog" v-if="dialogShow" scrollable  max-width="50%">
    <v-card>
      <v-card-title>
        <div class="dialog-text">{{title}}</div>
        <div class="dialog-dscrp">{{img.description}}</div>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="$store.commit('switchDetailDialogShow')">
              <v-icon>close</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </v-card-title>

      <v-img  class="detail" 
      :src="selectedItem.src" 
      height="80%"
      contain ></v-img>
      <v-card-title>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
import itemFactory from '../tools/ItemFactory'
import { mapState } from 'vuex'
import projects from '../projects/projects'
export default {
  props: {
    img: {
      type: Object, 
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      photo_item:"tab-1",
      items: ['architecture','urban', 'landscape'],
      innerItems:[],
    }
  },
  methods: {
    changePhoto() {
      window.scrollTo(0,0)
      this.innerItems=itemFactory().get(20)
    },
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
      return projects.find(x => x.id == this.selectedId).title
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
    text-align: left;
    padding-bottom: 5px;
    position: relative;
  }

  .dialog-text::after{
    position: absolute;
    content: " ";
    bottom: 0;
    width: calc(100% - 50px);
    left: 50px;
    background: #7a7a7a;
    height: 2px;
  }
</style>
<style>
</style>
