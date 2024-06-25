<template>
  <div class="flex flex-col h-screen overflow-hidden"> <!-- Added overflow-hidden -->
    <Topbar />
    <div class="flex flex-1 overflow-hidden"> <!-- Added overflow-hidden -->
      <Sidebar />
      <div class="flex-1 overflow-y-auto"> <!-- Added flex-1 and overflow-y-auto -->
        <Content />
      </div>
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
