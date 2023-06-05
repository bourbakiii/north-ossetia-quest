<template>
    <div class="layout empty-layout">
        <img :src="image_url" alt="Background" class="empty-layout__background">

        <slot name="page-render">Кажется, что-то пошло не так...</slot>
    </div>
</template>
<script setup>
const image_url = new URL(`/src/assets/images/backgrounds/back-11.svg`, import.meta.url);
</script>
<style lang="scss">
.empty-layout {
    padding: calc(60 / 1080 * 100vh) calc(50 / 1920 * 100vw) 0;

    &__background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        display: block;
        z-index: -1;
    }
}
</style>
