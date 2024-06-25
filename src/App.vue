<template>
  <div class="flex flex-col h-screen">
    <Topbar />
    <div class="flex flex-1">
      <Sidebar />
      <Content />
    </div>
    <Footer />
  </div>
</template>

<script>
import Topbar from './components/Topbar/Topbar.vue'
import Footer from './components/Footer/Footer.vue'
import Sidebar from './components/Sidebar/Sidebar.vue'
import Content from './components/Content/Content.vue'

export default {
  name: 'App',
  components: {
    Topbar,
    Footer,
    Sidebar,
    Content
  }
}
</script>

<style>
/* Add global styles here if needed */
</style>
