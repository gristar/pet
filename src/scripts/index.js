import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import routes from './routes'
import store from './store'
import App from '../modules/app'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.filter('formatNum', (num) => {
    if(!num) {
        return num;
    }
})

new Vue({
    el: '#app',
    router: new VueRouter(routes),
    store: new Vuex.Store(store),
    render: h => h(App)
})