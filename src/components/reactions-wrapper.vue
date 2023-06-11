<script setup>
import {ref} from "vue";
import AlankaSad from "@/components/alanka/sad.vue";
import AlankaFunny from "@/components/alanka/funny.vue";

const __SAD__ = ref(null);
const __FUNNY__ = ref(null);
const is_sad = ref(false);
let animation_timeout = null;

function animateSad() {
    is_sad.value = true;
}

function animateFunny() {
    is_sad.value = false;
    clearTimeout(animation_timeout);
    animation_timeout = setTimeout(() => {
        __FUNNY__.value.animate();
    });
}

defineExpose({animateSad, animateFunny});
</script>

<template>
    <div  class="reactions-wrapper">
        <alanka-sad ref="__SAD__" v-if="is_sad" class="reactions-wrapper__sad"/>
        <alanka-funny ref="__FUNNY__" v-else class="reactions-wrapper__funny"/>
    </div>
</template>


<style lang="scss">
.reactions-wrapper {
    &__sad, &__funny {
        width: 100%;
    }
}
</style>
