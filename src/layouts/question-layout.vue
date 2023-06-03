<template>
    <div class="layout question-layout">
        <router-link to="/" class="question-layout__main-link main-link">
            <icon class="main-link__icon" name="home"/>
            <p class="main-link__text">на главную</p>
        </router-link>
        <slot class="page" name="page-render">Кажется, что-то пошло не так...</slot>
    </div>
</template>
<script setup>
import Icon from "@/components/icon.vue";
</script>
<style lang="scss" scoped>
.question-layout {
    height: 100%;
    width: 100%;
    padding: 20px;
    max-width: 100vw;
    max-height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
}

.question-page {
    background-color: rgba(0, 0, 0, .1);
}

.main-link {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 0;
    color: black;
    transition: .25s;
    text-decoration: none;
    z-index: 1000;

    &:hover {
        gap: 6px;
    }


    &__text {
        font-size: 10px
    }
}
</style>
