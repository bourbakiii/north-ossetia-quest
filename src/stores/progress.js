import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useProgressStore = defineStore('progress', () => {
    const points = ref(0)
    const addPoint = ()=>points.value++;

    return {points, addPoint}
});
