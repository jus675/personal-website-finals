import { createRouter, createWebHistory } from "vue-router";
import Index from "../components/Index.vue";
import About from "../components/About.vue";
import Interests from "../components/Interests.vue";
import Gallery from "../components/Gallery.vue";
import Resources from "../components/Resources.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/about", component: About },
  { path: "/interests", component: Interests },
  { path: "/gallery", component: Gallery },
  { path: "/resources", component: Resources },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
