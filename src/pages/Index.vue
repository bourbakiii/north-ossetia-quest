<template>
    <main class="page index-page">
              <img :src="image_url " alt="Background" class="index-page__background">
        <img src="../assets/images/logotype.png" alt="Logotype" class="logotype" />
        <go-home />

        <div class="character-absoluter">
        <div class="character-wrapper">
            <div class="character-cloud">
                <icon class="back-bubble" name="back-bubble"/>
                <icon class="front-bubble" name="front-bubble"/>
                <p class="character-phrase">
                Привет, я Аланка! Давайте проверим, <br/> что вы знаете о Северной Осетии?<br>
                Ответьте правильно минимум на 7 вопросов <br/> и получите сувенир!
                </p>
            </div>
            <alanka class="svg-character"/>
        </div>
        </div>
        <router-link class="index-main-button main-button" to="/question/1">Начать игру</router-link>


    </main>
</template>

<script setup>
import Alanka from "@/components/alanka.vue";
import Icon from "@/components/icon.vue";

const image_url = new URL(`/src/assets/images/backgrounds/back-0.svg`, import.meta.url);
</script>

<style lang="scss" scoped>
.logotype{
    position: absolute;
    top:100px;
    left:50%;
    transform: translateX(-50%);
    z-index: 10;
}
.character-cloud{
    position: absolute;
    top:0;
    right:100%;
}
.back-bubble{
    position: absolute;
    top:-26px;
    left:-20px;
    z-index: -1;
}
.character-phrase{
    position: absolute;
    left: 47%;
    top:58%;
    transform: rotate(4.52deg) translateX(-50%) translateY(-50%);
    width:85%;
    text-align: center;
    font-family: 'Futura PT',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
}

.index-page {
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
    font-size: 32px;
    font-weight: bold;
    text-align: center;
}
.character-absoluter{
    position: absolute;
    right:calc(300/1920 * 100vw);
    bottom:calc(30/1080 * 100vh);
    z-index: 10;

    @media screen and (max-width: 1800px) {
        right:calc(130/1920 * 100vw);
        bottom:calc(40/1080 * 100vh);
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
    width: calc(320 / 1920 * 100vw);
    bottom: 0;
    z-index: 2;
}
.index-main-button{
    position: absolute;
    left:50%;
    bottom: calc(150/1080 * 100vh);
    transform: translate(-50%, -50%);
    height: max-content;
}

</style>
