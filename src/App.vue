<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <div class="flex-1 overflow-hidden">
      <component :is="isAuthenticated ? 'MainLayout' : 'LoginView'" />
    </div>
    <Footer />
  </div>
</template>

<script>
import MainLayout from './components/MainLayout.vue';
import Footer from './components/Footer/Footer.vue';
import LoginView from './views/LoginView.vue';
import { authService } from './services/authService';

export default {
  name: 'App',
  components: {
    MainLayout,
    Footer,
    LoginView,
  },
  data() {
    return {
      isAuthenticated: authService.isAuthenticated(),
    };
  },
  watch: {
    '$route'() {
      this.isAuthenticated = authService.isAuthenticated();
    },
  },
};
</script>

<style>
/* Add global styles here if needed */
</style>
