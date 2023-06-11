<template>
    <main class="page result-page">

        <img :src="image_url" alt="" class="result-page__background"/>
        <go-home/>
        <div class="result-page__content">
            <h2>{{ points }}/{{ question_length }}</h2>
            <h1>{{ result.title }}</h1>
            <div class="result-text__wrapper">
                <img class="result-text__background" :src="bubble_url" alt="Bubble">
                <p v-html="result.text"></p>
            </div>
            <router-link class="result-main-button main-button" to="/start">Сыграть еще раз</router-link>
        </div>
    </main>
</template>

<script setup>
import {useProgressStore} from "@/stores/progress.js";
import {useQuestionsStore} from "@/stores/questions.js";
import icon from "@/components/icon.vue";
import {computed} from "vue";

const image_url = new URL(`@/assets/images/backgrounds/back-result.svg`, import.meta.url);
const bubble_url = new URL(`@/assets/images/result-bubble.svg`, import.meta.url);

const {points} = useProgressStore();

function getResults(points) {
    if (points <= 3) return {
        title: 'Турист',
        text: 'О Северной Осетии вы&nbsp;знаете не&nbsp;слишком много. Мы&nbsp;рады, что наша игра познакомила вас поближе с&nbsp;этой прекрасной республикой. Осетия знаменита не&nbsp;только удивительно живописными пейзажами и&nbsp;культурными памятниками, но&nbsp;и&nbsp;большим гостеприимством. Обязательно посетите этот уютный уголок России и&nbsp;Включайтесь в&nbsp;Осетию!'
    }
    if (points <= 6) return {
        title: 'Почтенный гость осетина',
        text: 'Вы кое-что знаете о&nbsp;Северной Осетии и, скорее всего, бывали там. Уверены, что узнав из&nbsp;нашей игры ещё больше об этой прекрасной республике, вы&nbsp;захотите побывать там снова. Тем более, что Осетия славится не&nbsp;только живописными пейзажами и&nbsp;культурными памятниками, но&nbsp;и&nbsp;большим гостеприимством. Так что не&nbsp;откладывайте поездку и&nbsp;Включайтесь в&nbsp;Осетию!'
    }
    else
        return {
            title: 'Истинный горец',
            text: 'Уæлахизимæ дын арфæ кæнæм! Вы прекрасно знаете Северную Осетию и, возможно, даже поняли, что первой фразой мы поздравили вас по-осетински с&nbsp;победой в&nbsp;игре. Вам&nbsp;не&nbsp;понаслышке знакомы живописные пейзажи республики и&nbsp;разновидности начинок осетинских пирогов. Приезжайте почаще в&nbsp;этот уютный и&nbsp;гостеприимный уголок России, берите с&nbsp;собой друзей и&nbsp;все вместе Включайтесь в&nbsp;Осетию!'
        }
}

const result = computed(() => getResults(points));
const question_length = useQuestionsStore().questions.length;
</script>

<style lang="scss" scoped>

.result-page {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    flex-shrink: 0;
    height: 100%;
    width: 100%;

    &__content {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 1237px;
        flex-grow: 1;
    }

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

h1, h2 {
    margin-bottom: calc(35 / 1920 * 100vw);

    font-family: 'Neskid', sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: calc(100 / 1920 / $text-scale-coefficient * 100vw);
    line-height: 85%;
    color: #484646;
    text-align: center;

}

p {
    font-family: 'Futura PT', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: calc(31 / 1920 / $text-scale-coefficient * 100vw);
    line-height: 120%;
    text-align: center;
    width: 100%;
}

.result-text__wrapper {
    margin-top: 20px;
    position: relative;
    width: calc(1230 / 1920 * 100vw);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 75px;
    height: calc(313 / 1920 * 100vw);
    color: #484646;
}

.result-text__background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 100%;
    object-fit: cover;

}

.result-main-button {
    margin-top: calc(60 / 1920 * 100vw);

}
</style>
