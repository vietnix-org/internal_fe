<template>
  <div
    :class="[
      'transition-all duration-300 ease-in-out', 
      isSidebarCollapsed ? 'w-20' : sidebarWidthClass,
    ]"
    class="bg-lightmode dark:bg-darkmode h-full px-4 py-6 overflow-y-auto overflow-x-hidden relative"
    @mouseover="expandSidebar"
    @mouseleave="collapseSidebar"
  >
    <div class="mb-8">
      <div class="flex items-center justify-between cursor-pointer" @click="toggleGroup('ga4')">
        <h2 :class="[isSidebarCollapsed ? 'text-center' : '']" class="text-gray-900 dark:text-white font-bold text-sm hover:opacity-75">GA4</h2>
        <font-awesome-icon v-if="!isSidebarCollapsed" :icon="['fac', ga4Icon]" class="h-5 w-5 hover:opacity-75" />
      </div>
      <transition name="dropdown">
        <ul v-show="isGa4Expanded || isSidebarCollapsed" class="overflow-hidden mt-4">
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <router-link to="/content/ga4-overview" class="flex items-center w-full">
              <font-awesome-icon :icon="['fac', 'overview']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Overview</span>
            </router-link>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <router-link to="/content/ga4-detail-traffic" class="flex items-center w-full">
              <font-awesome-icon :icon="['fac', 'detailTraffic']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Detail Traffic</span>
            </router-link>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <router-link to="/content/ga4-traffic-acquisition" class="flex items-center w-full">
              <font-awesome-icon :icon="['fac', 'trafficAcquisition']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Traffic Acquisition</span>
            </router-link>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <router-link to="/content/ga4-engagements" class="flex items-center w-full">
              <font-awesome-icon :icon="['fac', 'engagements']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Engagements</span>
            </router-link>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <router-link to="/content/ga4-detail-event" class="flex items-center w-full">
              <font-awesome-icon :icon="['fac', 'detailEvent']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Detail Event</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
    <hr class="my-4 border-gray-300 dark:border-gray-600">
    <div class="mb-8">
      <div class="flex items-center justify-between cursor-pointer" @click="toggleGroup('gsc')">
        <h2 :class="[isSidebarCollapsed ? 'text-center' : '']" class="text-gray-900 dark:text-white font-bold text-sm hover:opacity-75">GSC</h2>
        <font-awesome-icon v-if="!isSidebarCollapsed" :icon="['fac', gscIcon]" class="h-5 w-5 hover:opacity-75" />
      </div>
      <transition name="dropdown">
        <ul v-show="isGscExpanded || isSidebarCollapsed" class="overflow-hidden mt-4">
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <router-link to="/content/gsc-overview" class="flex items-center w-full">
              <font-awesome-icon :icon="['fac', 'overview']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Overview</span>
            </router-link>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <router-link to="/content/gsc-detail" class="flex items-center w-full">
              <font-awesome-icon :icon="['fac', 'gscDetail']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Detail</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
    <hr class="my-4 border-gray-300 dark:border-gray-600">
    <div>
      <div class="flex items-center justify-between cursor-pointer" @click="toggleGroup('order')">
        <h2 :class="[isSidebarCollapsed ? 'text-center' : '']" class="text-gray-900 dark:text-white font-bold text-sm hover:opacity-75">Order</h2>
        <font-awesome-icon v-if="!isSidebarCollapsed" :icon="['fac', orderIcon]" class="h-5 w-5 hover:opacity-75" />
      </div>
      <transition name="dropdown">
        <ul v-show="isOrderExpanded || isSidebarCollapsed" class="overflow-hidden mt-4">
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <router-link to="/content/order-overview" class="flex items-center w-full">
              <font-awesome-icon :icon="['fac', 'overview']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Overview</span>
            </router-link>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
    <router-link to="/content/order-seo" class="flex items-center w-full">
      <font-awesome-icon :icon="['fac', 'seo']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
      <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">SEO</span>
    </router-link>
  </li>
  <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
    <router-link to="/content/order-google-ads" class="flex items-center w-full">
      <font-awesome-icon :icon="['fac', 'googleAds']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
      <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Google Ads</span>
    </router-link>
  </li>
  <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
    <router-link to="/content/order-direct" class="flex items-center w-full">
      <font-awesome-icon :icon="['fac', 'direct']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
      <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Direct</span>
    </router-link>
  </li>
  <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
    <router-link to="/content/order-facebook" class="flex items-center w-full">
      <font-awesome-icon :icon="['fac', 'facebook']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
      <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Facebook</span>
    </router-link>
  </li>
  <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
    <router-link to="/content/order-data-manager" class="flex items-center w-full">
      <font-awesome-icon :icon="['fac', 'dataManager']" :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" />
      <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">Data Manager</span>
    </router-link>
  </li>
        </ul>
      </transition>
    </div>
    <div class="flex items-center justify-center mt-8 relative" :class="{ 'right-0': isSidebarCollapsed }">
      <button @click="toggleSidebar" class="p-2" @mouseover="handleMouseOverButton" @mouseleave="handleMouseOutButton">
        <font-awesome-icon :icon="['fac', collapseIcon]" class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'Sidebar',
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const isGa4Expanded = ref(false);
    const isGscExpanded = ref(false);
    const isOrderExpanded = ref(false);
    const isSidebarCollapsed = ref(false);
    const sidebarWidthClass = ref('w-52');
    const isMouseOverButton = ref(false); // Track if mouse is over collapse button

    const toggleGroup = (group) => {
      if (group === 'ga4') isGa4Expanded.value = !isGa4Expanded.value;
      if (group === 'gsc') isGscExpanded.value = !isGscExpanded.value;
      if (group === 'order') isOrderExpanded.value = !isOrderExpanded.value;
    };

    const toggleSidebar = () => {
      isSidebarCollapsed.value = !isSidebarCollapsed.value;
      sidebarWidthClass.value = isSidebarCollapsed.value ? 'w-20' : 'w-52';
    };

    const expandSidebar = () => {
      if (isSidebarCollapsed.value) {
        sidebarWidthClass.value = 'w-52';
        setTimeout(() => {
          if (!isMouseOverButton.value) {
            sidebarWidthClass.value = 'w-20'; 
          }
        }, 500); 
      }
    };

    const collapseSidebar = () => {
      if (isSidebarCollapsed.value && !isMouseOverButton.value) { 
        sidebarWidthClass.value = 'w-20';
      }
    };

    // Event listeners for button hover
    const handleMouseOverButton = () => {
      isMouseOverButton.value = true;
    };

    const handleMouseOutButton = () => {
      isMouseOverButton.value = false;
      collapseSidebar(); // Attempt to collapse if mouse leaves button and sidebar
    };

    onMounted(() => {
      window.addEventListener('mouseover', handleMouseOverButton);
      window.addEventListener('mouseout', handleMouseOutButton);
    });

    onUnmounted(() => {
      window.removeEventListener('mouseover', handleMouseOverButton);
      window.removeEventListener('mouseout', handleMouseOutButton);
    });

    return {
      isGa4Expanded,
      isGscExpanded,
      isOrderExpanded,
      isSidebarCollapsed,
      sidebarWidthClass,
      ga4Icon: computed(() => (isGa4Expanded.value ? 'angleDown' : 'angleUp')),
      gscIcon: computed(() => (isGscExpanded.value ? 'angleDown' : 'angleUp')),
      orderIcon: computed(() => (isOrderExpanded.value ? 'angleDown' : 'angleUp')),
      collapseIcon: computed(() => (isSidebarCollapsed.value ? 'expand' : 'collapse')),
      toggleGroup,
      toggleSidebar,
      expandSidebar,
      collapseSidebar,
    };
  },
};
</script>


<style scoped>
.bg-lightmode {
  background-color: #F1F2F3;
  color: #333; /* Dark text in light mode */
}

.bg-darkmode {
  background-color: #E5E7EB;
}

/* Existing styles - keep these as they are */
.text-gray-900 { /* Base text color for dark mode */
  color: #111827; 
}

.dark .text-gray-900 { /* Override text color for dark mode */
  color: white;
}

.text-gray-700 { /* Use consistent text color across themes */
  color: #333;
}

/* ... (rest of your existing styles for icons, transitions, etc.) */
</style>
