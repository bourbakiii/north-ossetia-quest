<template>
  <div class="layout question-layout">
    LAYOUT LABEL
    <slot class="page" name="page-render">Кажется, что-то пошло не так...</slot>
  </div>
</template>
<script setup>
console.log("Layout rendered");
</script>
<style lang="scss" scoped>
.layout{
  height:100%;
  width:100%;
  padding: 20px;
}
.question-page{
  background-color: rgba(0,0,0,.1);
}
</style>