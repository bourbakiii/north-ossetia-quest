<script setup>
const image_url = new URL(`@/assets/images/screens/industrialization.png`, import.meta.url);
const video_buttons = [{
    name: 'Промышленные площадки'
},
    {
        name: 'Строительные материалы'
    }, {
        name: 'Радиоэлектроника'
    },

    {
        name: 'Производство мебели'
    },
    {
        name: 'Металлургия'
    },
    {
        name: 'Легкая промышленность'
    },
    {
        name: 'Машиностроение'
    },
    {
        name: 'Стекольная промышленность'
    },
    {
        name: 'Центр НХП'
    },];


</script>

<template>
    <main class="industrialization-page page">
        <img :src="image_url" alt="" class="industrialization-page__background">
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
    justify-content: center;
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

    &__content {
        display: flex;
        align-items: center;
        flex-direction: row;

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
        background: #7C7C7B;
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
