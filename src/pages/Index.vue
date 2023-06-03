<template>
  <main  class="page index-page">
<!--      <img :src="image_url" alt="Background" class="index-page__background">-->
      <div class="character-wrapper">

          <alanka class="svg-character"/>
          <div class="character-cloud">
              Привет, я Аланка! <br> Давайте проверим, что вы знаете о Северной Осетии?<br>
              Ответьте правильно минимум на 7 вопросов и получите сувенир!
          </div>
      </div>
    <div class="index-page__content">
      <h1>ИГРА «ВКЛЮЧИСЬ В ОСЕТИЮ»</h1>
      <router-link class="base-button start-button" to="/question/1">Начать тест</router-link>
    </div>



  </main>
</template>

<script setup>
import Alanka from "@/components/alanka.vue";
// const image_url = new URL(`/src/assets/images/backgrounds/back-7.svg`, import.meta.url);
</script>

<style lang="scss" scoped>
.index-page {
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: stretch;
  justify-content: center;
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
.start-button{
    text-decoration: none;
    padding: 0 10px;
}
h1{
    font-size:20px;
    font-weight: bold;
}
.character-wrapper{
    height:100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
.character-cloud{
    position: absolute;
    top:50px;
    left:100%;
    transform: translateX(-20%);
    background-color: rgba(250, 250, 250);
    border-radius: 10px;
    padding: 10px;
    white-space: nowrap;
    word-break: keep-all;
    z-index: 3;
    filter: drop-shadow(0 0  1px black);

    &::after{
        position: absolute;
        content: '';

        left:0;
        top:100%;
        width:30px;
        height:30px;
           background-color: rgba(250, 250, 250);
    z-index:-1;
        filter: drop-shadow(0 0  1px black);

        clip-path:polygon(30% 0, 0% 100%, 100% 0);
    }
}
.svg-character{
    width:320px;
    bottom: 0;
    z-index: 2;
}

</style>
