<script setup>
const image_url = new URL(`@/assets/images/screens/main.png`, import.meta.url);
const rso_logo = new URL(`@/assets/icons/rso-logo.png`, import.meta.url);
const link_buttons = [
    {
        name: 'Презентация региона'
    },
    {
        name: 'Инвестиционная карта'
    },
    {
        name: 'Инвестиционные проекты'
    },

    {
        name: 'Промышленность',
        to:'/industrialization'
    }];
</script>

<template>
    <main class="main-page page">
        <img :src="image_url" alt="" class="main-page__background">
        <div class="main-page__content">
            <div class="logotype">
                <img :src="rso_logo" alt="" class="logotype__image">
            </div>

        </div>
    </main>
</template>


<style lang="scss">
.main-page {
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 0 calc(140 / 1920 * 100vw) calc(63 / 1080 * 100vh);

    &__background {
        position: fixed;
        top: 0;
        left: 0;
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

    &__link-buttons {
        flex-grow: 1;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        max-width: calc(580 / 1920 * 100vw);
        gap: 10px;
    }
}

.link-button {
    font-family: 'FuturaPT', sans-serif;
    font-weight: 500;
    font-size: calc(33 / 1920 * 100vw);
    height: calc(77 / 1080 * 100vh);

    border: none;
    outline: none;
    border-radius: 90px;
    text-transform: uppercase;
}
</style>
