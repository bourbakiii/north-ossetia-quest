<template>
  <main class="page question-page">
    <h1>Вопрос №{{ $route.params.id }}</h1>

    <p class="question-page__question">
      {{question.text}}
    </p>

    <div class="question-page__variants">
      <button :disabled="answer_text" @click="selectVariant(key, value)" v-for="(value, key, index) in question.variants" class="btn btn-primary">{{ value.title }}</button>
    </div>

    <transition name="opacity-transition">
      <p v-if="answer_text" class="question-page__answer-text">{{answer_text}}</p>
    </transition>
<!--    <router-link :to="`/question/${+$route.params.id+1}`" type="button" class="btn btn-primary">{{ button_text }}-->
<!--    </router-link>-->

  </main>
</template>
<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";
import { useQuestionsStore } from "@/stores/questions";

const $route = useRoute();
const button_text = "Next";

const $questions_store = useQuestionsStore();
const question = $questions_store.questions[0];
const answer_text = ref(null);


function goToNextQuestion() {
  console.log("go to next question handler");
}
function selectVariant(key, value){
  answer_text.value = value.answer;

  if(question.proper != key) return console.error('Wrong');
  else return console.info('Proper')
}
</script>