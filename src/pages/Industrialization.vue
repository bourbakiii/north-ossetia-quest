<script setup>
import GoHome from "@/components/go-home.vue";

const image_url = new URL(`@/assets/images/screens/industrialization.png`, import.meta.url);
const video_buttons = [{
    name: 'Промышленные площадки',
    to: '/videos'
},
    {
        name: 'Строительные материалы',
        to: '/videos'
    },
    {
        name: 'Радиоэлектроника',
        to: '/videos'
    },

    {
        name: 'Производство мебели',
        to: '/videos'
    },
    {
        name: 'Металлургия',
        to: '/videos'
    },
    {
        name: 'Легкая промышленность',
        to: '/videos'
    },
    {
        name: 'Машиностроение',
        to: '/videos'
    },
    {
        name: 'Стекольная промышленность',
        to: '/videos'
    },
    {
        name: 'Центр НХП',
        to: '/videos'
    },];


</script>

<template>
    <main class="industrialization-page page">
        <img :src="image_url" alt="" class="industrialization-page__background">
            <go-home class="industrialization-page__home"/>
        <div class="industrialization-page__content">
            <h1 class="industrialization-page__title">Промышленность</h1>
            <div class="industrialization-page__screen-buttons">
                <router-link v-for="button in video_buttons" :to="button.to||''" class="screen-button"
                             v-html="button.name"></router-link>
            </div>
        </div>
    </main>
</template>


<style lang="scss">
.industrialization-page {
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    padding: 0 calc(140 / 1920 * 100vw) calc(63 / 1080 * 100vh);

    &__background {
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
flex-shrink: 0;
    }

    &__content {
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-grow: 1;
        transform: translateY(-30px);
    }

    &__title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: calc(84 / 1920 * 100vw);
        flex-grow: 1;
        flex-shrink: 0;
        text-align: center;
        font-size: calc(84 / 1920 * 100vw);
        text-transform: uppercase;
        font-weight: 700;
        color: white;
        background: $grey;
    }

    &__screen-buttons {
        flex-grow: 1;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        max-width: calc(580 / 1920 * 100vw);
        gap: 10px;
    }
}

</style>
