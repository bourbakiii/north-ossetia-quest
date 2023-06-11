import {defineStore} from 'pinia'
import {computed, ref} from "vue";

export const useProgressStore = defineStore('progress', () => {
    const answers = ref([]);

    function addPoint(index, value) {
        answers.value[index].answered = true;
        answers.value[index].result = value;
    }

    function reset() {
        answers.value = [
            {result: false, answered: false},
            {result: false, answered: false},
            {result: false, answered: false},
            {result: false, answered: false},
            {result: false, answered: false},
            {result: false, answered: false},
            {result: false, answered: false},
            {result: false, answered: false},
            {result: false, answered: false},
            {result: false, answered: false}];
    }

    const points = computed(() => answers.value.reduce((summ, item) => summ += +item.result, 0));
    return {answers, addPoint, points, reset}
});
