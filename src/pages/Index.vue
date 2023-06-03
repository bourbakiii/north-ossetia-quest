<template>
  <main  class="page index-page">
<!--      <img :src="image_url" alt="Background" class="index-page__background">-->
      <div class="character-wrapper">

          <alanka class="svg-character"/>
          <div class="character-cloud">
              CLOUD
          </div>
      </div>
    <div class="index-page__content">
      <h1>ИГРА «ВКЛЮЧИСЬ В ОСЕТИЮ»</h1>

      <router-link class="btn btn-primary" to="question/1">Начать тест</router-link>
    </div>



  </main>
</template>

<script setup>
import Alanka from "@/components/alanka.vue";
const image_url = new URL(`/src/assets/images/backgrounds/back-7.svg`, import.meta.url);

</script>

<style lang="scss" scoped>
.index-page {
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  position: relative;
    &__background{

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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }
}

.character-wrapper{
    border: 1px solid black;
    height:100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
.character-cloud{

}
.svg-character{
    width:300px;
    bottom: 0;
    z-index: 2;
}

</style>
