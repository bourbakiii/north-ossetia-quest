<script setup>
import GoHome from "@/components/go-home.vue";
import {computed, ref} from "vue";
import Lightbox from "@/components/Lightbox.vue";
import {useRoute} from "vue-router";
import ind_names from "@/stores/indust-names";
import {useAFKStore} from "@/stores/afk.js";

const $route = useRoute();

let image_url = ref(new URL(`@/assets/images/screens/videos-grey.svg`, import.meta.url));
let icon_name = ref('home-white');
let icon_class = ref('');
let icon_text = ref('на главную');

if($route.params.video_id[2] !== undefined) {
    console.log(12321);
    image_url.value = new URL(`@/assets/images/screens/industrialization.png`, import.meta.url);
    icon_name.value = 'back-arrow';
    icon_class.value = 'arrow';
    icon_text.value = 'назад'
}
const is_lightbox = ref(false);
const parsedVideoURL = ref(null);

const count_of_videos = computed(() => $route.params.video_id[0] === '1' ? 2 : $route.params.video_id[0] === '2' ? countOfSecondV() : 14);
const title_of_page = computed(() => {
    const title = $route.params.video_id[0] === '1' ? 'Презентация региона' : $route.params.video_id[0] === '3' ? 'Инвестиционные проекты' : null;
    if (title) return title;
    else return ind_names[+($route.params.video_id[2] + ($route.params.video_id[3] !== undefined ? $route.params.video_id[3] : '')) - 1];
});

function countOfSecondV() {
    switch ($route.params.video_id[2] + ($route.params.video_id[3] !== undefined ? $route.params.video_id[3] : '')) {
        case '1':
        case '2':
        case '7':
            return 2;
        case '3':
        case '4':
        case '5':
        case '6':
            return 3;
        case '10':
        case '8':
        case '9':
            return 1;
        case '11':
            return 4;
    }
}

function showLightbox(item) {
    let additional = $route.params.video_id[2] + ($route.params.video_id[3] !== undefined ? $route.params.video_id[3] : '');
    if (additional !== 'undefined') additional = additional + '/';
    else additional = ''
    const string_url = `/videos/${$route.params.video_id[0]}/${additional}${item}/video.mp4`;
    parsedVideoURL.value = new URL(string_url, import.meta.url);
    is_lightbox.value = true;
}

function closeLightbox() {
    is_lightbox.value = false;
    enableAFK();
}

function parseImageURL(item) {
    let additional = $route.params.video_id[2] + ($route.params.video_id[3] !== undefined ? $route.params.video_id[3] : '');
    if (additional !== 'undefined') additional = additional + '/';
    else additional = ''
    const string_url = `/videos/${$route.params.video_id[0]}/${additional}${item}/preview.jpg`;
    return new URL(string_url, import.meta.url);
}

const afk_store = useAFKStore();

function disableAFK() {
    afk_store.is_afk_watcher_enabled = false;
}

function enableAFK() {
    afk_store.is_afk_watcher_enabled = true;
}
</script>

<template>
    <main class="videos-page page">
        <img :class="{original: $route.params.video_id[2] !== undefined}" :src="image_url" alt="" class="videos-page__background">
        <div class="videos-page__content">
            <go-home :content="icon_text" :class="icon_class" :icon_name="icon_name" :to="$route.params.video_id[0] === '2'?'/industrialization':'/'"
                     class="videos-page__home"/>
            <h1 class="videos-page__title">{{ title_of_page }}</h1>
            <div class="videos-page__videos">
                <div @click="showLightbox(item)" class="video" v-for='item in count_of_videos'>
                    <img :src="parseImageURL(item)" alt="" class="video__image">
                </div>
            </div>
        </div>

        <transition name="modal-transition">
            <Lightbox class="lightbox" @close="closeLightbox" v-if="is_lightbox">
                <video @pause="enableAFK" @play="disableAFK" controls autoplay class="lightbox-video"
                       :src="parsedVideoURL"/>
            </Lightbox>
        </transition>
    </main>
</template>


<style lang="scss" scoped>
.videos-page {
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;

    &__background {
        background-color: $grey;
        position: fixed;
        top: -30vh;
        left: -30vw;
        width: 150vw;
        height: 150vh;
        object-fit: cover;
        display: block;
        z-index: -1;
        &.original{
            top: -3px;
            left: -3px;
            width: 101vw;
            height: 101vh;
        }
    }

    &__home {
        fill: white !important;
        color: white !important;
        align-self: flex-start;
        margin-bottom: 20px;
        &.arrow{
            align-items: center;
        }
    }

    &__content {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        padding-bottom: 30px;

    }

    &__title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-grow: 1;
        flex-shrink: 0;
        text-align: center;
        height: calc(72 / 1920 * 100vw);
        font-size: calc(72 / 1920 * 100vw);
        text-transform: uppercase;
        font-weight: 700;
        color: white;
        background: $grey;
        margin-bottom: calc(40 / 1080 * 100vh);

        &__screen-buttons {
            flex-grow: 1;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            max-width: calc(580 / 1920 * 100vw);
            gap: 10px;
        }
    }

    &__videos {
        flex-grow: 1;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px 20px;
    }
}

.video {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    max-height: 190px;
    border-radius: 12px;
    cursor: pointer;
    transition: .25s;

    &:hover {
        transform: scale(1.03);

    }

    &__image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: fill;
        transition: .25s;
    }
}

.lightbox {
    z-index: 1000;
}

.lightbox-video {
    width: 100%;
    max-width: 88%;
    height: auto;
    max-height: 88%;
    border-radius: 12px;
    box-shadow: 0 0 10px 1px black;
}
</style>
