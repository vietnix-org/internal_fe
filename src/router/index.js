import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import Content from '@/views/Content.vue';

const routes = [
  { path: '/', redirect: { name: 'login' } },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/home', name: 'home', component: HomeView, meta: { requiresAuth: true } },
  { path: '/content/:viewName', name: 'content', component: Content, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
