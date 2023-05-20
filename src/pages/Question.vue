<template>
  <main class="page question-page">
    <h1>Вопрос №{{ $route.params.id }}</h1>

    <p class="question-page__question">
      {{question.text}}
    </p>

    <div class="question-page__variants">
      <button @click="selectVariant" v-for="(value, key, index) in question.variants" class="btn btn-primary">{{ value.title }}</button>
    </div>


<!--    <router-link :to="`/question/${+$route.params.id+1}`" type="button" class="btn btn-primary">{{ button_text }}-->
<!--    </router-link>-->

    <router-link to="/" class="btn btn-primary">MAIN</router-link>
  </main>
</template>
<script setup>
import {useRoute} from "vue-router";
import { useQuestionsStore } from "@/stores/questions";

const $route = useRoute();
const button_text = "Next";

const $questions_store = useQuestionsStore();
const question = $questions_store.questions[0];



function goToNextQuestion() {
  console.log("go to next question handler");
}
function selectVariant(){
  console.log("select variant handler");
}
</script>