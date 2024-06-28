<template>
  <div class="bg-topbar-gradient dark:bg-topbar-gradient-dark h-11 flex items-center justify-between px-4 transition-colors duration-300 ease-in-out">
    <img src="@/images/topbar_icons/logo.svg" alt="Logo" class="h-6 w-auto" />

    <!-- Avatar and Dropdown -->
    <div class="relative">
      <img @click="toggleDropdown" src="@/images/topbar_icons/profile_pictures/default.png" alt="Avatar" class="h-8 w-8 rounded-full cursor-pointer" />

      <!-- Dropdown Menu -->
      <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
        <ul class="py-1">
          <li class="px-4 py-2 text-gray-700 dark:text-gray-300 cursor-pointer" @click="toggleDarkMode">
            Dark Mode
          </li>
          <li class="px-4 py-2 text-gray-700 dark:text-gray-300 cursor-pointer" @click="logout">
            Logout
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { authService } from '@/services/authService';

export default {
  name: "Topbar",
  data() {
    return {
      isDropdownOpen: false,
      isDarkMode: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      this.isDropdownOpen = false; // Close the dropdown after toggling
    },
    logout() {
      authService.logout();
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
/* Any additional styling for the topbar can go here */
</style>
