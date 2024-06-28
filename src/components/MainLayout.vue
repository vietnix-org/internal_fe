<template>
    <div class="flex flex-col h-screen overflow-hidden">
      <Topbar />
      <div class="flex flex-1 overflow-hidden">
        <Sidebar />
        <div class="flex-1 overflow-y-auto">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Topbar from './Topbar/Topbar.vue';
  import Sidebar from './Sidebar/Sidebar.vue';
  
  export default {
    name: 'MainLayout',
    components: {
      Topbar,
      Sidebar,
    },
  };
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  