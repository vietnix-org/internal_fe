<template>
  <div class="bg-topbar-gradient dark:bg-topbar-gradient-dark h-11 flex items-center justify-between px-4 transition-colors duration-300 ease-in-out">
    <img src="@/images/topbar_icons/logo.svg" alt="Logo" class="h-6 w-auto" />

    <!-- Centered Admin Panel Button (only visible to admins) -->
    <div class="flex-1 flex justify-center">
      <button v-if="isAdmin" @click="goToAdminPanel" class="admin-btn px-3 py-1.5 text-gray-700 dark:text-gray-300 cursor-pointer transition ease-in-out delay-150 hover:bg-blue-100 dark:hover:bg-blue-800 duration-300 rounded-lg">
        Admin Panel
      </button>
    </div>

    <!-- Right-side buttons -->
    <div class="flex items-center space-x-4">
      <!-- Dark Mode Toggle Button -->
      <button @click="toggleDarkMode" class="h-8 w-8 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg class="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg class="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      </button>
      <!-- Logout Button -->
      <button @click="logout" class="logout-btn px-3 py-1.5 text-gray-700 dark:text-gray-300 cursor-pointer transition ease-in-out delay-150 hover:bg-blue-100 dark:hover:bg-blue-800 duration-300 rounded-lg">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { authService } from '@/services/authService';

export default {
  name: "Topbar",
  data() {
    return {
      isDarkMode: false,
      isAdmin: authService.getRole() === 'admin',
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    goToAdminPanel() {
      this.$router.push({ name: 'admin' });
    },
    logout() {
      authService.logout();
      this.$router.push({ name: 'login' });
    }
  },
  mounted() {
    this.isDarkMode = document.documentElement.classList.contains('dark');
  }
};
</script>

<style scoped>
/* Adjusting hover effects and colors */
ul li:hover {
  padding-left: 10px; /* Smaller hover effect */
  transition: padding-left 0.2s ease-in-out;
}

.bg-blue-100 {
  background-color: #1e40af; /* Darker blue for hover */
}

.dark:hover:bg-blue-800 {
  background-color: #172554; /* Darker blue for dark mode hover */
}

.admin-btn:hover, .logout-btn:hover {
  padding-left: 10px; /* Hover effect */
  transition: padding-left 0.2s ease-in-out;
}
</style>
