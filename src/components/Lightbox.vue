<template>
    <div @click.self="$emit('close')" class="lightbox-wrapper">
        <button @click="$emit('close')"  class="lightbox-close">
            <icon name="close"/>
        </button>
        <slot/>
    </div>
</template>

<script setup>
import Icon from "@/components/icon.vue";
</script>

<style lang="scss">
.lightbox {
    &-wrapper {
        z-index: 100;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .6);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &-close {
        cursor: pointer;
        stroke: white;
        position: absolute;
        right: 20px;
        top: 20px;
        height: calc(40/1920 * 100vw);
        width: calc(40/1920 * 100vw);
        background-color: transparent;
        outline: none;
        border: none;

        .icon {
            width: 100%;
            height: 100%;
        }
    }
}


</style>
