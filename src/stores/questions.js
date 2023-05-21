import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useQuestionsStore = defineStore('questions', () => {
    const questions = ref([{
        text: 'С кем Северная Осетия не имеет общей границы?',
        variants: {
            a: {
                title: 'Абхазия',
                answer: 'Верно! Чтобы приехать в отпуск на абхазское побережье, осетинам нужно сначала побывать на территориях либо Краснодарского края, либо Карачаево-Черкесии, либо Грузии. Общей границы с солнечной Абхазией у Северной Осетии нет, что вовсе не мешает этим двум регионам дружить.'
            },
            b: {
                title: 'Кабардино-Балкария',
                answer: 'Неверно. На Кавказе есть гора Суган высотой в 4487 метров. Южные и восточные склоны горы находятся частично в Северной Осетии, а северные и западные – в Кабардино-Балкарии. Но, как говорится, умный в гору не пойдёт – добраться из Владикавказа в Нальчик можно и по равнине, там тоже проходит общая граница.'
            },
            c: {
                title: 'Чеченская Республика',
                answer: 'Неверно. С Чеченской Республикой граничит Моздокский район Северной Осетии.'
            },
        },
        proper: 'a'
    }]);
    return {questions}
});