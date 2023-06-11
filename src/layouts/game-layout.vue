<template>
    <div class="layout game-layout">
        <img :src="image_url" alt="" class="game-layout__background">
        <slot name="page-render">Кажется, что-то пошло не так...</slot>
        <!--        <Video/>-->
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import {onMounted} from "vue";

const image_url = new URL(`/src/assets/images/backgrounds/back-11.svg`, import.meta.url);
const $router = useRouter();
onMounted(()=>{
$router.push('/start');

})
</script>
<style lang="scss" scoped>
.game-layout {
    padding: calc(60 / 1080 * 100vh) calc(50 / 1920 * 100vw) 0;

    &__background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        display: block;
        background-color: green;
        z-index: -1;
    }
}
</style>
