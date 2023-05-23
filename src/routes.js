import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Edit from './components/Edit/EditPage.vue'
import Home from './components/Home/HomePage.vue'

export const vueRoutes = createRouter({
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: "/edit",
            component: Edit
        }
    ],
    mode: 'hash',
    linkActiveClass: "active"
})