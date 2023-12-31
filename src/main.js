import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import VueSplide from '@splidejs/vue-splide';

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use( VueSplide );
app.use(router);


app.mount("#app");
