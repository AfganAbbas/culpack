import "./style.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";
import DataForm from "./pages/DataForm.vue";
import Vue3Toastify from "vue3-toastify";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/register", name: "register", component: Register },
  { path: "/dataform", name: "dataform", component: DataForm },
  { path: "/login", name: "login", component: Login },
  { path: "/about", name: "about", component: About },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createApp(App)
  .use(Vue3Toastify, {
    position: toast.POSITION.BOTTOM_RIGHT,
  })
  .use(router)
  .mount("#app");
