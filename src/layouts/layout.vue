<template>
    <div class="layout default-layout">
        <div class="default-layout__background"></div>
        <slot name="page-render">Кажется, что-то пошло не так...</slot>
    </div>
</template>
<style lang="scss" scoped>
.default-layout {
    padding: calc(60 / 1080 * 100vh) calc(50 / 1920 * 100vw) 0;

    &__background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: $grey;
        z-index: -1;
    }
}
</style>
