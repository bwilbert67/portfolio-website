import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import store from './store/index'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_REMOTE_API;

createApp(App).mount('#app')
new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
  