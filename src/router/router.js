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
        path: '/videos',
        component: () => import('@/Pages/Videos.vue')
    },
    {
        path: '/start',
        name: 'Start game',
        meta: {layout: 'game-layout'},
        component: () => import('@/pages/Start.vue')
    },
    {
        path: '/question/:id',
        meta: {layout: 'game-layout'},

        component: () => import('@/Pages/Question.vue')
    },
    {
        path: '/result',
        meta: {layout: 'game-layout'},

        component: () => import('@/Pages/Result.vue')
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
