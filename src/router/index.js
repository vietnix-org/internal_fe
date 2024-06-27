import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Content from '@/views/Content.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/content/:viewName', name: 'content', component: Content }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
