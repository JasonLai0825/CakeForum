import routes from './src/assets/js/route-config.js'

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#content',
    router
})