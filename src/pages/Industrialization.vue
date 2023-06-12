<script setup>
import GoHome from "@/components/go-home.vue";
import ind_names from "@/stores/indust-names";
const image_url = new URL(`@/assets/images/screens/industrialization.png`, import.meta.url);
</script>

<template>
    <main class="branch-page page">
        <img :src="image_url" alt="" class="branch-page__background">
        <go-home icon_name="home-white" class="branch-page__home"/>
        <div class="branch-page__content">
            <h1 class="branch-page__title">Промышленность</h1>
            <div class="branch-page__screen-buttons">
                <router-link v-for="(button,index) in ind_names" :to="`/videos/2-${index+1}`" class="screen-button"
                             v-html="button"></router-link>
            </div>
        </div>
    </main>
</template>


<style lang="scss">
.branch-page {
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    padding: 0 0 calc(63 / 1080 * 100vh);

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
        color: white !important;
        flex-shrink: 0;
    }

    &__content {
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-grow: 1;
        transform: translateY(-30px);
        padding: 0 calc(140 / 1920 * 100vw)
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
