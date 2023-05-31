import Vue from 'vue'
import Router from 'vue-router'
import BenHome from "../views/BenHome"
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/" ,
            name: "Home",
            component: BenHome,
        },
    ]
})

export default router;
