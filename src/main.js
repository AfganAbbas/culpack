import "./style.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";
import DataForm from "./pages/DataForm.vue";
import QrCodeReader from "./pages/QrCodeReader.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/register", name: "register", component: Register },
  { path: "/dataform", name: "dataform", component: DataForm },
  { path: "/login", name: "login", component: Login },
  { path: "/about", name: "about", component: About },
  { path: "/qr-code", name: "qrcode", component: QrCodeReader },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount("#app");
