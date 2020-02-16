// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import HelloWorld from './components/HelloWorld'
import N2List from './demos/N2List'
import N2_201007_01 from './demos/N2_201007_01'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/HelloWorld',
  component: HelloWorld
}, {
  path: '/N2List',
  component: N2List
}, {
  path: '/N2_201007_01',
  component: N2_201007_01
}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
