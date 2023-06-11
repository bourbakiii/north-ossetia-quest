import {ref, watch} from 'vue';
import {defineStore} from 'pinia'
import router from "@/router/router.js";

export const useAFKStore = defineStore('AFK', () => {
    const is_afk_watcher_enabled = ref(false);
    let timeout = null;
    let timeout_time = 60000;

    router.beforeEach(()=>{
        is_afk_watcher_enabled.value = true;
    })
    window.onmousemove = () => {
        if (is_afk_watcher_enabled.value) initTimeout();
    }
    window.onmouseclick = () => {
        if (is_afk_watcher_enabled.value) initTimeout();
    }

    watch(is_afk_watcher_enabled, value => {
        console.log("SETTED AFK - ", value);
        if (value) initTimeout();
        else removeTimeout();
    }, {immediate: true});

    function initTimeout() {
            clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log('GOING HOME');
            router.push('/');
        }, timeout_time);
    }

    function removeTimeout() {
        clearTimeout(timeout);
        timeout = null;
    }

    return {is_afk_watcher_enabled};
});
