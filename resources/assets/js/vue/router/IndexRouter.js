import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../example.vue")
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
