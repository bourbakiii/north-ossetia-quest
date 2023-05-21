<template>
  <main class="page index-page">
    <h1>Результат</h1>

    <h2>{{points}} / {{question_length}}</h2>

    <router-link class="btn btn-primary" to="/">На главную</router-link>
  </main>
</template>

<script setup>
import {useProgressStore} from "@/stores/progress.js";
import {useQuestionsStore} from "@/stores/questions.js";


const {points} = useProgressStore();
const question_length = useQuestionsStore().questions.length;
</script>

<style lang="scss">
.index-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  height: 100%;
}
</style>