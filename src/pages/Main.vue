<script setup>
import Icon from "@/components/icon.vue";

const image_url = new URL(`@/assets/images/screens/main.png`, import.meta.url);
const rso_logo = new URL(`@/assets/icons/rso-logo.png`, import.meta.url);
const game_icon = new URL(`@/assets/icons/game-logo-btn.svg`, import.meta.url);
const link_buttons = [
    {
        name: 'Презентация региона'
    },
    {
        name: 'Промышленность',
        to: '/industrialization'
    },
    {
        class: 'upscaled',
        name: 'Инвестиционные проекты'
    },
    {
        class: 'upscaled',
        name: 'Инвестиционная карта'
    }];
</script>

<template>
    <main class="main-page page">
        <img :src="image_url" alt="" class="main-page__background">
        <div class="main-page__content">
            <div class="logotype">
                <img :src="rso_logo" alt="" class="logotype__image">
                <p class="logotype__text">
                    Республика <br/>
                    Северная Осетия-Алания
                </p>
            </div>
            <div class="links">
                <div class="link-wrapper" v-for="button in link_buttons">
                    <router-link :to="button.to||''" :class="`screen-button link ${button.class||''}`">
                        {{ button.name }}
                    </router-link>
                </div>
            </div>
            <router-link class="main-start-button" to="/start">
                <span class="main-start-button__text">Игра</span>
                <div class="main-start-button__icon-wrapper">
                    <img :src="game_icon" alt="" class="main-start-button__icon"/>
                </div>
            </router-link>
        </div>
    </main>
</template>


<style lang="scss" scoped>
.main-page {
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    padding: 0 calc(93 / 1920 * 100vw) calc(63 / 1080 * 100vh);

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
        justify-content: space-between;
        flex-direction: column;
    }
}

.logotype {
    font-family: 'FuturaPT', sans-serif;
    font-size: 30px;
    color: white;
    text-align: center;
    font-weight: 500;
    letter-spacing: 1.4px;
    font-style: italic;
    line-height: 120%;
    text-transform: uppercase;

    &__image {
        margin-bottom: calc(27 / 1080 * 100vh);
    }
}

.links {
    margin-top: calc(54 / 1080 * 100vh);
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: calc(174 / 1080 * 100vh) 0;
}

.link {
    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(709 / 1920 * 100vw);

        &:nth-child(2n) {
            margin-left: auto;
        }
    }

    text-decoration: none;

    height: calc(91 / 1080 * 100vh);
    width: calc(645 / 1920 * 100vw);

    &.upscaled {
        width: 100%;
        height: calc(101 / 1080 * 100vh);
    }
}

.main-start-button {
    margin-top: calc(120 / 1080 * 100vh);
    width: calc(537 / 1920 * 100vw);
    height: calc(150 / 1920 * 100vw);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url('@/assets/icons/main-screen-button-back.svg') no-repeat;
    background-size: cover;
    gap: 11px;
    text-decoration: none !important;
    padding-top: 9px;

    &__text {
        font-family: 'FuturaPT', sans-serif;
        font-weight: 500;
        font-size: calc(35 / 1920 * 100vw);
        text-transform: uppercase;
        color: black !important;
    }

    &__icon {
        width: 100%;
        height: 100%;

        &-wrapper {
            position: relative;
            width: 80%;

            &:before {
                content: "«";
                position: absolute;
                top: 50%;
                right: 100%;
                transform: translate(-5px, -50%);
                color: black !important;
                font-size: calc(25 / 1920 * 100vw);
            }

            &:after {
                content: "»";
                position: absolute;
                top: 50%;
                left: 100%;
                transform: translate(5px, -75%);
                color: black !important;
                font-size: calc(25 / 1920 * 100vw);
            }
        }
    }
}
</style>
