import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Story from './components/Story'
import Photography from './Photography'
import Index from './Index'
import Team from './components/Team'
import Partner from './Partner'
import Motion from './Motion'
import ImageView from './components/ImageView'
import Client from './Client'
import Article from './components/Article'

import Store from './store/Store'

import VueImageSwipe from 'vue-image-swipe'
import 'vue-image-swipe/dist/vue-image-swipe.css'
Vue.use(VueImageSwipe)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
    { path:'/', component: Index},
    { path: '/photography', component: Photography,
      children: [
        {
          path: 'detail',
          component: undefined
        }
      ]
    },
    { path: '/story', component: Story,
      children: [
        {
          path: 'article',
          component: Article
        }
      ]
    },
    { path: '/team', component: Team},
    { path: '/partner', component: Partner},
    { path: '/detail', component: Photography},
    { path: '/motion', component: Motion},
    { path: '/client', component: Client},
    { path: '/view', components: {
      imageView:ImageView
    }}
]
const store = new Vuex.Store(Store)

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
