import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import "./assets/index.css";
import App from "./App.vue";
import Home from "./views/Home.vue";

const app = createApp(App);
const pinia = createPinia();

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/booking/:id",
    name: "booking",
    component: () => import("./views/Booking.vue"),
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("./views/Cart.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("./views/HistoryOrder.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(pinia);
app.use(router);
app.mount("#app");
