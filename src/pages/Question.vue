<template>
    <main class="page question-page">
        <img :src="image_url" alt="Background image" class="question-page__background"/>

        <div class="question-page__content">
            <router-link to="/" class="question-layout__main-link main-link">
                <icon class="main-link__icon" name="home"/>
                <p class="main-link__text">на главную</p>
            </router-link>
            <p class="question-info">
                {{ $route.params.id }} / {{ questions.length }}
            </p>
            <div class="content">
                <div class="question-place">
                    <div class="question-text">
                        <transition name="answer-text-transition" mode="out-in">
                            <p v-if="answer_text" class="question-answer">
                                <span :class="is_success?'success':'wrong'">{{is_success?'Верно! ':'Неверно. '}}</span>
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
    </main>
</template>
<style lang="scss">
.main-link {
    width:100%;

    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 0;
    color: black !important;
    transition: .25s;
    text-decoration: none !important;
    z-index: 1000;
    margin-bottom: 10px;
    &__text {
        font-size: 10px
    }
}

span{
    &.wrong{
        color: $wrong-color;
    }
    &.success{
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
        padding: 0 60px;
    }
}

.question-info {
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    margin-bottom: 50px;
}

.buttons {
    min-width: 400px;
    width: max-content;
    max-width: 457px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 9px;
    padding: 18px 0;
}

.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 40px;
    max-width: 1440px;
}

.question-place {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:650px;
    margin: 0 auto;
    height: max-content;
    line-height: 120%;
}
.question-answer {
    border-radius: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
}
.question-answer-button{
    position: absolute;
    top: calc(100% + 20px);
    margin: 0 auto;
    padding: 0 15px;
    text-decoration: none !important;
}
</style>

<script setup>
import icon from "@/components/icon.vue";

import {computed, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useQuestionsStore} from "@/stores/questions";
import {useProgressStore} from "@/stores/progress";

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
const show_next_button_delay = 2500;

function selectVariant(key, value) {
    answer_text.value = value.answer;

    setTimeout(() => show_next_button.value = true, show_next_button_delay);

    if (question.proper !== key) return console.error('Wrong');
    is_success.value =  true;
    addPoint();
}
</script>
