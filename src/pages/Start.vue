<template>
    <main class="page start-page">
        <img :src="image_url " alt="" class="start-page__background">
        <img src="../assets/images/logotype.png" alt="Logotype" class="logotype"/>
        <go-home/>

        <div class="character-absoluter">
            <div class="character-wrapper">
                <img class="character-cloud" :src="phrase_url" alt=".">

                <alanka-hello class="svg-character"/>
            </div>
        </div>
        <router-link class="index-main-button main-button" to="/question/1">Начать игру</router-link>
    </main>
</template>

<script setup>
import AlankaHello from "@/components/alanka/hello.vue";
import Icon from "@/components/icon.vue";
import {useProgressStore} from "@/stores/progress.js";

const image_url = new URL(`/src/assets/images/backgrounds/back-0.svg`, import.meta.url);
const phrase_url = new URL("@/assets/icons/alanka-text.svg", import.meta.url);
const store = useProgressStore();
store.reset();
</script>

<style lang="scss" scoped>
.logotype {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

.character-cloud {
    position: absolute;
    width: calc(570 / 1920 * 100vw);
    height: calc(213 / 1080 * 100vh);
    object-fit: contain;
    top: -40px;
    right: 100%;
}

.back-bubble {
    position: absolute;
    top: -26px;
    left: -20px;
    z-index: -1;
}

.start-page {
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;

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

.start-button {
    text-decoration: none;
    padding: 0 10px;
}

h1 {
    font-size: calc(32 / 1920 / $text-scale-coefficient * 100vw);
    font-weight: bold;
    text-align: center;
}

.character-absoluter {
    position: absolute;
    right: calc(300 / 1920 * 100vw);
    bottom: calc(30 / 1080 * 100vh);
    z-index: 10;

    @media screen and (max-width: 1800px) {
        right: calc(130 / 1920 * 100vw);
        bottom: calc(40 / 1080 * 100vh);
    }
}

.character-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.svg-character {
    width: calc(323 / 1920 * 100vw);
    bottom: 0;
    z-index: 2;
}

.index-main-button {
    position: absolute;
    left: 50%;
    bottom: calc(150 / 1080 * 100vh);
    transform: translate(-50%, -50%);
    height: max-content;
}

</style>
