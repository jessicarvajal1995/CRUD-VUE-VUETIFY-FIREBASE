import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'font-awesome/css/font-awesome.css'

import VueRouter from 'vue-router';
import { routes } from "./routes";
Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})



new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')