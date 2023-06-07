import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/Pages/Index.vue')
    },
    {
        path: '/question/:id',
        component: () => import('@/Pages/Question.vue')
    },
    {
        path: '/result',
        component: () => import('@/Pages/Result.vue')
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
