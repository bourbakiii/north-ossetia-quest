import {createApp} from 'vue'
import {createPinia} from 'pinia'
import 'reset-css';
import '@/assets/scss/global.scss';
import router from './router/router';
import App from './App.vue'
import GoHome from "@/components/go-home.vue";

const pinia = createPinia();
const app = createApp(App)
app.component('go-home', GoHome);

app.use(router).use(pinia).mount('#app');
