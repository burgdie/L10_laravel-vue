/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";
import { createApp } from "vue";

import ExampleComponent from "./components/ExampleComponent.vue";
import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp({});
const router = createRouter({
    history: createWebHistory(),
    routes,
});
app.use(router);

app.component("example-component", ExampleComponent);

app.mount("#app");
