import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import Content from '@/views/Content.vue';
import AdminPanel from '@/views/AdminPanel.vue';
import { authService } from '@/services/authService';

const routes = [
  { path: '/', redirect: { name: 'home' } },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/home', name: 'home', component: HomeView, meta: { requiresAuth: true } },
  { path: '/content/:viewName', name: 'content', component: Content, meta: { requiresAuth: true } },
  { path: '/admin', name: 'admin', component: AdminPanel, meta: { requiresAuth: true, requiresAdmin: true } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = authService.isAuthenticated();
  const userRole = authService.getRole();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'login' });
    } else {
      if (to.matched.some(record => record.meta.requiresAdmin) && userRole !== 'admin') {
        next({ name: 'home' }); // Redirect non-admin users to home if they try to access admin routes
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router;
