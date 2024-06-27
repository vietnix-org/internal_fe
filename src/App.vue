<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <Topbar />
    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <div class="flex-1 overflow-y-auto">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Topbar from './components/Topbar/Topbar.vue';
import Footer from './components/Footer/Footer.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Topbar,
    Footer,
    Sidebar,
  },
};
</script>

<style>
/* Add global styles here if needed */
</style>
