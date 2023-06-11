// import {ref} from 'vue'
// import {useRouter} from "vue-router";
import {defineStore} from 'pinia'
export const useAFKStore = defineStore('AFK', () => {
    // let timeout = null;
    // const $router = useRouter();
    // console.log('АЛЛО НАХУЙ');
    //     window.onmousemove = restartTimeout;
    //     window.onclick = restartTimeout;
    //
    // function restartTimeout() {
    //     clearTimeout(timeout);
    //     timeout = setTimeout(async () => {
    //         await $router.push('/').then(()=>restartTimeout());
    //
    //     }, 5000);
    // }
    // function initAFKTimeout(){
    //     let timeout = null;
    //
    //
    //     restartTimeout();

    //

    //
    // }
    //
    // onst addPoint = ()=>points.value++;
    //
    // return {points, addPoint}
});

// function AFKTimeout() {
//     let timeout = null;
//
//     restartTimeout();
//     window.onmousemove = restartTimeout;
//     window.onclick = restartTimeout;
//
//     function restartTimeout() {
//         clearTimeout(timeout);
//         timeout = setTimeout(async () => {
//             await $router.value.push('/').then(()=>AFKTimeout());
//
//         }, 5000);
//     }
//
// }
