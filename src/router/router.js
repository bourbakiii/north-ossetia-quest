import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/Pages/Index.vue')
    },
    {
        path: '/question/:id',
        meta: {layout: 'question-layout'},
        component: () => import('@/Pages/Question.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/Pages/Test.vue')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;