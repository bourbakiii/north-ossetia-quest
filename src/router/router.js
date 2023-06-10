import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/pages/Main.vue')
    },
    {
        path: '/industrialization',
        component: () => import('@/Pages/Industrialization.vue')
    },
    {
        path: '/start',
        name: 'Start game',
        component: () => import('@/pages/Start.vue')
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
