<template>
    <transition name="opacity-transition" mode="out-in">
        <component :key="$route.meta.layout" :is="LAYOUT_COMPONENT">
            <template v-slot:page-render>
                <router-view v-slot="{ Component, route }">
                    <transition name="opacity-transition" mode="out-in">
                        <component :key="$route.path" class="page" :is="Component"/>
                    </transition>
                </router-view>
            </template>
        </component>
    </transition>
</template>

<script setup>
import {defineAsyncComponent, onMounted, ref, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import Layout from "@/layouts/layout.vue";
import {useAFKStore} from "@/stores/afk.js";

// useRouter().push('/');
// alert("СДЕЛАЙ ПОКА ВОЗВРАТ ПРИ АФК");

// Настройка layout-ов и анимации для перехода между страницами  ///////////////////////////////////////////////////////////
const $route = ref(useRoute());
const $router = ref(useRouter());

const AFK_STORE = useAFKStore();
console.log($route.value.fullPath);
const DEFAULT_LAYOUT_NAME = 'layout';
let LAYOUT_COMPONENT = null;
let CURRENT_LAYOUT_NAME = ref(DEFAULT_LAYOUT_NAME);
watch($route.value, value => {
    if (value.meta.layout === CURRENT_LAYOUT_NAME.value) return;
    CURRENT_LAYOUT_NAME.value = value.meta.layout || DEFAULT_LAYOUT_NAME;
});
watch(CURRENT_LAYOUT_NAME, () => {
    LAYOUT_COMPONENT = defineAsyncComponent(() => import(`@/layouts/${CURRENT_LAYOUT_NAME.value}.vue`))
}, {immediate: true});


// onMounted(() => );



</script>

<style lang="scss">
@import '@/assets/scss/transitions.scss';
</style>
