<template>
    <main class="page question-page">
        <img :src="image_url" alt="Background image" class="question-page__background"/>

        <div class="question-page__content">
            <p class="question-info">
                {{ $route.params.id }} / {{ questions.length }}
            </p>
            <div class="content">
                <div class="question-place">
                    <div class="question-text">
                        <transition name="answer-text-transition" mode="out-in">
                            <p v-if="answer_text" class="question-page__answer">
                                <span :class="is_success?'success':'wrong'">{{is_success?'Верно! ':'Неверно. '}}</span>
                                {{ answer_text }}</p>
                            <p v-else class="question-page__answer">{{ question.text }}</p>
                        </transition>
                    </div>
                    <transition name="answer-text-transition">
                        <router-link v-if="show_next_button" :to="next_button_url" type="button"
                                     class="btn btn-primary question-answer-button">{{ next_button_text }}
                        </router-link>
                    </transition>
                </div>
                <div class="buttons">
                    <button class="question-button" :class="answer_text?question.proper === key?'success':'wrong':''"
                            :disabled="answer_text" @click="selectVariant(key,value)"
                            v-for="(value, key) in question.variants">{{ value.title }}
                    </button>
                </div>
            </div>
            <div class="question">


            </div>

            <!--            <h1>Вопрос №{{ question_number + 1 }} / {{ questions.length }}</h1>-->

            <!--            <p class="question-page__question">-->
            <!--                {{ question.text }}-->
            <!--            </p>-->

            <!--            <div class="question-page__variants">-->
            <!--                <button :disabled="answer_text" @click="selectVariant(key, value)"-->
            <!--                        v-for="(value, key) in question.variants" class="question-button"-->
            <!--                        :class="question.proper === key?'success':'wrong'">-->
            <!--                    {{ value.title }}-->
            <!--                </button>-->
            <!--            </div>-->

            <!--            <transition name="answer-text-transition">-->
            <!--                <p v-if="answer_text" class="question-page__answer-text">{{ answer_text }}</p>-->
            <!--            </transition>-->
            <!--            <transition name="answer-text-transition">-->
            <!--                <router-link v-if="show_next_button" :to="next_button_url" type="button"-->
            <!--                             class="btn btn-primary">{{ next_button_text }}-->
            <!--                </router-link>-->
            <!--            </transition>-->
        </div>
        <!--        <div v-if="question.image" class="question-page__image-wrapper">-->
        <!--            <transition name="answer-image-transition" mode="out-in">-->
        <!--                <img v-if="!answer_text" src="@/assets/images/2-crop.png" alt="Картинка вопроса"-->
        <!--                     class="question-page__image question-page__image_crop">-->
        <!--                <img v-else src="@/assets/images/2-full.jpg" alt="Полная картинка вопроса"-->
        <!--                     class="question-page__image question-page__image_crop">-->
        <!--            </transition>-->
        <!--        </div>-->
    </main>
</template>

<style lang="scss">
$success-color: forestgreen;
$wrong-color: darkred;
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
        background-color: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
    }

    //
    //    &__variants {
    //        display: flex;
    //        flex-direction: column;
    //        justify-content: flex-start;
    //        align-items: stretch;
    //        gap: 5px;
    //    }
    //
    //    &__image-wrapper {
    //        width: 300px;
    //        max-height: 100%;
    //        z-index: 10;
    //    }
    //
    //    &__image {
    //        width: 100%;
    //        height: auto;
    //        //object-fit:cover;
    //    }
}

//
//.variant-button {
//    text-align: left;
//    word-break: keep-all;
//    white-space: normal;
//    font-size: 13px;
//    text-overflow: ellipsis;
//}

.question-info {
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    margin-bottom: 30px;
}

.buttons {
    min-width: 400px;
    width: max-content;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 5px;
}

.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.question-place {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 400px;
    width: auto;
    max-width: 600px;
    margin: 0 50px;
    height: max-content;
}

.question-button {
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #B91D42;
    border-radius: 60px;
    height: 45px;
    cursor: pointer;
    transition: .2s;

    &.success {
        color: white;
        border-color: $success-color;
        background-color: $success-color;
    }

    &.wrong {
        color: white;
        border-color: $wrong-color;
        background-color: $wrong-color;
    }

    &:disabled {
        cursor: default;
    }

    &:not(&:disabled):hover {
        transform: scale(1.05);
    }
}

.question-answer-button{
    position: absolute;
    top:calc(100% + 20px);
    left:50%;
    transform: translateX(-50%);
}
</style>

<script setup>
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
const question_image = computed(() => answer_text.value ? question.full_image : question.image);

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
