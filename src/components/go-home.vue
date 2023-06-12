<template>
    <router-link  :to="$props.to||'/'" class="main-link">
        <icon class="main-link__icon" :name="$attrs.icon_name||'home'"/>
        <p class="main-link__text" v-html="$attrs.content||'на главную'"></p>
    </router-link>
</template>
<script setup>
import Icon from "@/components/icon.vue";
</script>
<style lang="scss">
.main-link {
    width: max-content;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 10px;
    padding: 0;
    color: black !important;
    transition: .25s;
    text-decoration: none !important;
    z-index: 1000;

    &__text {
        font-family: 'Futura PT', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: calc(20 / 1920 / 1.2 * 100vw);
        line-height: 60%;
        height: min-content;
        width: max-content;
    }
}
</style>
