<template>
  <main  class="page index-page">
    <div class="index-page__content">
      <h1>ИГРА «ВКЛЮЧИСЬ В ОСЕТИЮ»</h1>

      <router-link class="btn btn-primary" to="question/1">Начать тест</router-link>
    </div>
  <alanka class="svg-character"/>


  </main>
</template>

<script setup>
import Alanka from "@/components/alanka.vue";
</script>

<style lang="scss">
.index-page {
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }
}

</style>