<template>
  <component class="icon" v-bind="$attrs" :is="__ICON__" />
</template>


<script setup>
import { defineAsyncComponent } from "vue";
const props = defineProps({
  name: {
    required: true,
    type: String
  }
})
const __ICON__ = defineAsyncComponent(async () => await import(`@/assets/icons/${props.name}.svg`));
</script>