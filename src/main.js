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

import config from '../config.js'
import util from './util.js'

let dynamic_config = JSON.parse(util.httpGetSync(config.config_url).toString());
Object.keys(dynamic_config).map((k) => {
  config[k] = dynamic_config[k];
})

for (let i = 0; i < config.photography.length; i++) {
  config.photography[i].projects = JSON.parse(util.httpGetSync(config.photography[i].projects).toString());
}

for (let i = 0; i < config.partner.length; i++) {
  config.partner[i].projects = JSON.parse(util.httpGetSync(config.partner[i].projects).toString());
}

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
  base: config.baseurl,
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
