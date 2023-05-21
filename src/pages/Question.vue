<template>
  <main class="page question-page">
    <h1>Вопрос №{{ question_index + 1 }} / {{ questions.length }}</h1>

    <p class="question-page__question">
      {{ question.text }}
    </p>

    <div class="question-page__variants">
      <button :disabled="answer_text" @click="selectVariant(key, value)"
              v-for="(value, key) in question.variants" class="btn"
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


  </main>
</template>

<style lang="scss">
.question-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  width: 500px;

  &__variants {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 5px;
  }


}
</style>

<script setup>
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {useQuestionsStore} from "@/stores/questions";
import {useProgressStore} from "@/stores/progress";


const $route = useRoute();
const {questions} = useQuestionsStore();
const {addPoint} = useProgressStore();
const question_index = $route.params.id < 0 ? 0 : (($route.params.id > questions.length - 1) ? (+questions.length - 1) : +$route.params.id);
console.log('index, ', question_index);
const question = questions[question_index];

const next_button_text = computed(() => $route.params.id >= questions.length ? 'Посмотреть результат' : 'Следующий вопрос');
const next_button_url = computed(() => question_index + 1 >= questions.length ? `/result` : `/question/${question_index + 1}`)
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