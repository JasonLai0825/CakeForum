import routes from './src/assets/js/route-config.js'
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#content',
    router
})