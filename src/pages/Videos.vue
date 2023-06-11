<script setup>
import GoHome from "@/components/go-home.vue";
import {computed, onMounted, ref} from "vue";
import Lightbox from "@/components/Lightbox.vue";
import {useRoute} from "vue-router";
const image_url = new URL(`@/assets/images/screens/videos.svg`, import.meta.url);
const is_lightbox = ref(false);
const parsedVideoURL = ref(null);
const $route = useRoute();

const count_of_videos = computed(()=>+$route.params.video_id===1?2:14);
function showLightbox(item) {
    parsedVideoURL.value = new URL(`../assets/videos/${$route.params.video_id}/${item}/video.mp4`, import.meta.url);
    is_lightbox.value = true;
}

function closeLightbox() {
    is_lightbox.value = false;
}

function parseImageURL(item) {
    const url = new URL(`../assets/videos/${$route.params.video_id}/${item}/preview.jpg`, import.meta.url);
    console.log(url);
    return url;
}
</script>

<template>
    <main class="videos-page page">
        <img :src="image_url" alt="" class="videos-page__background">
        <div class="videos-page__content">
            <go-home class="videos-page__home"/>
            <h1 class="videos-page__title">Презентация региона ({{count_of_videos}})</h1>
            <div class="videos-page__videos">
                <div @click="showLightbox(item)" class="video" v-for='item in count_of_videos'>
                    <img :src="parseImageURL(item)" alt="" class="video__image">
                </div>
            </div>
        </div>

        <transition name="modal-transition">
            <Lightbox class="lightbox" @close="closeLightbox" v-if="is_lightbox">
                <video controls autoplay class="lightbox-video" :src="parsedVideoURL"/>
            </Lightbox>
        </transition>
    </main>
</template>


<style lang="scss">
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
        top: -3px;
        left: -3px;
        width: 101vw;
        height: 101vh;
        object-fit: cover;
        display: block;
        z-index: -1;
    }

    &__home {
        color: white !important;
        align-self: flex-start;
        margin-bottom: 20px;
    }

    &__content {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
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
        height: max-content;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 11px;
    }
}

.video {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    max-height: 140px;
    border-radius: 12px;
    cursor: pointer;
    transition: .25s;

    &:hover {
        transform: scale(1.03);

    }

    &__image {
        display: block;
        width: 100%;
        height:100%;
        object-fit: cover;
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
