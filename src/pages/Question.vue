<script setup>
import icon from "@/components/icon.vue";

import {computed, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useQuestionsStore} from "@/stores/questions";
import {useProgressStore} from "@/stores/progress";
import ReactionsWrapper from "@/components/reactions-wrapper.vue";

const reactions = ref(null);
const $route = useRoute(), $router = useRouter();

const image_url = new URL(`/src/assets/images/backgrounds/back-${$route.params.id}.svg`, import.meta.url);

const {questions} = useQuestionsStore();
const {addPoint} = useProgressStore();
const is_success = ref(false);
if ($route.params.id <= 0) $router.push("/question/1")
else if ($route.params.id > questions.length) $router.push(`/question/${questions.length}`);

// const question_number = $route.params.id < 0 ? 0 : (($route.params.id > questions.length - 1) ? (+questions.length - 1) : +$route.params.id);
const question_number = $route.params.id - 1;
console.log('index, ', question_number);
const question = questions[question_number];

const next_button_text = computed(() => +$route.params.id >= questions.length ? 'Посмотреть результат' : 'Следующий вопрос');
const next_button_url = computed(() => +$route.params.id >= questions.length ? `/result` : `/question/${+$route.params.id + 1}`)
const answer_text = ref(null);

const show_next_button = ref(false);
const show_next_button_delay =1000;

function selectVariant(key, value) {
    answer_text.value = value.answer;

    setTimeout(() => show_next_button.value = true, show_next_button_delay);

    if (question.proper !== key) {
        reactions.value.animateSad();
        return console.error('Wrong');
    }
    reactions.value.animateFunny();
    is_success.value = true;
    addPoint();

}

const alanka_positions = [
    '19%',
    '12.5%',
    '15%',
    '18.7%',
    '62.3%',
    '16.2%',
    '10%',
    '41%',
    '32.4%',
    '17.7%'
];
</script>

<template>
    <main class="page question-page">
        <img :src="image_url" alt="" class="question-page__background"/>
        <div class="question-page__content">
            <div class="top-row">
                <go-home/>
                <p class="question-info">
                    {{ $route.params.id }} / {{ questions.length }}
                </p>
            </div>

            <div class="content">
                <div class="question-place">
                    <div class="question-text">
                        <transition name="answer-text-transition" mode="out-in">
                            <p v-if="answer_text" class="question-answer">
                                <span
                                    :class="is_success?'success':'wrong'">{{
                                        is_success ? 'Верно! ' : 'Неверно. '
                                    }}</span>
                                {{ answer_text }}</p>
                            <p v-else class="question-answer">{{ question.text }}</p>
                        </transition>
                    </div>
                    <transition name="answer-text-transition">
                        <router-link v-if="show_next_button" :to="next_button_url" type="button"
                                     class="base-button question-answer-button">{{ next_button_text }}
                        </router-link>
                    </transition>
                </div>
                <div class="buttons">
                    <button class="base-button" :class="answer_text?question.proper === key?'success':'wrong':''"
                            :disabled="answer_text" @click="selectVariant(key,value)"
                            v-for="(value, key) in question.variants">{{ value.title }}
                    </button>
                </div>
            </div>
        </div>
        <reactions-wrapper
            :style="{left: alanka_positions[question_number]}"
            ref="reactions" class="reactions-wrapper"/>
    </main>
</template>
<style lang="scss">
.reactions-wrapper {
    position: absolute;
    z-index: 10;
    width: calc(257 / 1080 * 100vh);
    bottom:0;
    transform: translateY(11%);
}

span {
    &.wrong {
        color: $wrong-color;
    }

    &.success {
        color: $success-color;
    }
}

.question-page {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;

    &__background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        display: block;
    }

    &__content {
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
}

.top-row {
    position: relative;
    width: 100%;
    margin-bottom: calc(18 / 1080 * 100vh);
}

.question-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: 'Futura PT', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: calc(24 / 1920 / $text-scale-coefficient * 100vw);
    line-height: 100%;
}

.buttons {
    min-width: calc(800 / 1920 * 100vw);
    max-width: 607px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 9px;
}

.content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    gap: calc(40 / 1920 * 100vw);
    width: 100%;
    padding: 0 calc(60 / 1920 * 100vw);
    margin-top: 10px;
}


.question-answer {
    border-radius: 10px;
    font-family: 'FuturaPT', sans-serif;
    font-style: normal;
    font-weight: 450;
    font-size: calc(26 / 1920 /$text-scale-coefficient * 100vw);
    line-height: 130%;
}

.question-place {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 650px;
    line-height: 120%;
    max-width: calc(800 / 1920 * 100vw);
    flex-grow: 1;
    align-self: center;
}

.question-answer-button {
    position: absolute;
    top: calc(100% + 20px);
    margin: 0 auto;
    text-decoration: none !important;
}
</style>

