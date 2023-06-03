<template>
  <main class="page result-page">
    <h1>{{result.title}} ({{points}} / {{question_length}})</h1>
      <p>{{result.text}}</p>
    <router-link class="base-button main-button" to="/">На главную</router-link>
  </main>
</template>

<script setup>
import {useProgressStore} from "@/stores/progress.js";
import {useQuestionsStore} from "@/stores/questions.js";

const {points, getResults} = useProgressStore();
const result = getResults();
const question_length = useQuestionsStore().questions.length;
const level = points>3?(points>6?'Профи':'Знаток'):'Новичок';
</script>

<style lang="scss" scoped>
.result-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100%;
    width:100%;
    max-width: 600px;
    margin: 0 auto;
}
h1{
    font-size: 32px;
    font-weight: bold;
}
p{
    line-height: 120%;
    font-size: 20px;
}
.main-button{
    padding: 0 15px;
    text-decoration: none;
}
</style>
