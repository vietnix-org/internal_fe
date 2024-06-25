<template>
  <footer class="bg-lightblue dark:bg-darkblue py-2 px-8 flex justify-center items-center">
    <div class="flex items-center space-x-2 text-xxs text-gray-600 dark:text-gray-300">
      <span>© 2024 Vietnix JSC, frontend developed by Eugene Chu. All rights reserved.</span>
      <span>|</span>
      <a href="#" class="hover:text-gray-900 dark:hover:text-white">
        <img src="@/images/brands/facebook.svg" alt="Facebook" class="h-3 w-3">
      </a>
      <span>|</span>
      <a href="#" class="hover:text-gray-900 dark:hover:text-white">
        <img src="@/images/brands/instagram.svg" alt="Instagram" class="h-3 w-3">
      </a>
      <span>|</span>
      <a href="#" class="hover:text-gray-900 dark:hover:text-white">
        <img src="@/images/brands/github.svg" alt="GitHub" class="h-3 w-3">
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.text-xxs {
  font-size: 0.625rem; 
}
</style>
