<template>
  <main class="page question-page">
    <img :src="image_url" alt="Background image" class="question-page__background"/>

    <div class="question-page__content">
      <h1>Вопрос №{{ question_number + 1 }} / {{ questions.length }}</h1>

      <p class="question-page__question">
        {{ question.text }}
      </p>

      <div class="question-page__variants">
        <button :disabled="answer_text" @click="selectVariant(key, value)"
                v-for="(value, key) in question.variants" class="btn variant-button"
                :class="answer_text?(question.proper === key?'btn-success':'btn-danger'):'btn-outline-primary'">
          {{ value.title }}
        </button>
      </div>

      <transition name="answer-text-transition">
        <p v-if="answer_text" class="question-page__answer-text">{{ answer_text }}</p>
      </transition>
      <transition name="answer-text-transition">
        <router-link v-if="show_next_button" :to="next_button_url" type="button"
                     class="btn btn-primary">{{ next_button_text }}
        </router-link>
      </transition>
    </div>
    <div v-if="question.image" class="question-page__image-wrapper">
      <transition name="answer-image-transition" mode="out-in">
        <img v-if="!answer_text" src="@/assets/images/2-crop.png" alt="Картинка вопроса"
             class="question-page__image question-page__image_crop">
        <img v-else src="@/assets/images/2-full.jpg" alt="Полная картинка вопроса"
             class="question-page__image question-page__image_crop">
      </transition>
    </div>
  </main>
</template>

<style lang="scss">
.question-page {
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 60px;

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

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    width: 400px;
  }

  &__variants {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 5px;
  }

  &__image-wrapper {
    width: 300px;
    max-height: 100%;

  }

  &__image {
    width: 100%;
    height: auto;
    //object-fit:cover;
  }
}

.variant-button {
  text-align: left;
  word-break: keep-all;
  white-space: normal;
  font-size: 13px;
  text-overflow: ellipsis;
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
const show_next_button_delay = 1500;

function selectVariant(key, value) {
  answer_text.value = value.answer;

  setTimeout(() => show_next_button.value = true, show_next_button_delay);

  if (question.proper !== key) return console.error('Wrong');
  addPoint();
}
</script>