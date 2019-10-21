import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

import Story from './components/Story'
import Photography from './Photography'
import Index from './Index'
import Team from './components/Team'
import Partner from './Partner'
import Motion from './Motion'
import Client from './Client'
import Article from './components/Article'

import VueImageSwipe from 'vue-image-swipe'
import 'vue-image-swipe/dist/vue-image-swipe.css'

import AsyncComputed from 'vue-async-computed'

Vue.use(VueImageSwipe)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(AsyncComputed)


const routes = [
  { path: '/', component: Index },
  {
    path: '/photography', component: Photography,
    children: [
      {
        path: 'detail',
        component: undefined
      }
    ]
  },
  {
    path: '/story', component: Story,
    children: [
      {
        path: 'article',
        component: Article
      }
    ]
  },
  { path: '/team', component: Team },
  { path: '/partner', component: Partner },
  { path: '/detail', component: Photography },
  { path: '/motion', component: Motion },
  { path: '/client', component: Client }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
