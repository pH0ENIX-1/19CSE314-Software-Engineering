//routing

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [

    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },

    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/Signup.vue')
    },

    

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,

    routes
})

export default router

