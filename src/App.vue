<template>
   <v-app id="inspire">
    <top-bar></top-bar>
    <mobile-top-bar></mobile-top-bar>
    <transition name="fade">
      <router-view class="view-wrapper"></router-view>
    </transition>
    <transition name="fade">
      <router-view class="image-view" name="imageView"/>
    </transition>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar'
import MobileTopBar from './components/MobileTopBar'


// document.html.style.font = config.font

export default {
  name: 'App',
  components: {
    TopBar,
    MobileTopBar
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .vue-waterfall{
    margin-top: 20px;
  }


  @media (max-width: 1616px) {
    .container{
      max-width: 1200px;
      padding: 0;
    }
  }
  @media (max-width: 1216px) {
    .container{
      max-width: 800px;
      padding: 0;
    }
  }
  @media (min-width: 1617px) {
    .container{
      max-width: 1600px;
      padding: 0;
    }
  }
  a {
    text-decoration: none;
    color: #575757 !important;
  }
  .v-window__container--is-active{
    height: auto !important;
  }
  .tab-fix {
    top:64px;
    box-shadow: none;
  }
  @media(max-width: 960px) {
    .tab-fix{
      top: 56px;
    }
  }
  .tab-fix > .v-toolbar__content{
    padding: 0 !important;
    height: auto !important;
  }
  .v-dialog{
    position: relative;
    overflow: hidden;
  }
  .v-menu__content .v-list__tile{
    text-align: center;
    height: 34px !important;
  }
  /* .before-scrolled .v-list {
    background-color: rgba(221,221,221,0.4) !important;
  } */
  .mobile-top-bar{
    display: none;
  }
  .top-bar{
    display: none
  }
  @media (max-width: 1025px) {
    .mobile-top-bar{
      display: block;
    }
    .fixed-carousel .v-image{
      height: 30vh !important;
    }
  }
  @media (min-width: 1026px) {
    .top-bar{
      display: block;
    }
    .fixed-carousel .v-image{
      height: 100vh !important;
    }
  }
  @media (min-width: 760px) {
    .v-tabs__item{
      width: 250px !important;
    }
  }
  .elevation-8 {
      -webkit-box-shadow: 0px 5px 5px -3px rgba(200, 200, 200, 0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(200,200,200,0.12) !important;
      box-shadow: 0px 5px 5px -3px rgba(200,200,200,0.2), 0px 8px 8px 10px rgba(200,200,200,0.14), 0px 3px 14px 2px rgba(200,200,200,0.12) !important;
  }
  .elevation-2 {
    -webkit-box-shadow: 0px 3px 1px -2px rgba(200,200,200,0.2), 0px 2px 2px 0px rgba(200,200,200,0.14), 0px 1px 5px 0px rgba(200,200,200,0.12) !important;
    box-shadow: 0px 3px 1px -2px rgba(200,200,200,0.2), 0px 2px 2px 0px rgba(200,200,200,0.14), 0px 1px 5px 0px rgba(200,200,200,0.12) !important;
  }
  .v-menu__content--fixed {
    top: 64px !important;
  }
  body.story_body::-webkit-scrollbar{
    display: none;
  }
  .detail_active .v-responsive__content{
    box-sizing: content-box;
    border: 5px solid #FF6A00;
  }
</style>

