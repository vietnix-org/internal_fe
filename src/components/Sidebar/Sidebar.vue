<template>
  <div
    :class="[
      'transition-all duration-300 ease-in-out',
      isSidebarCollapsed ? 'w-24' : sidebarWidthClass,
      'bg-lightgrey dark:bg-sidebar-gradient-dark'
    ]"
    class="h-full px-4 py-6 overflow-y-scroll overflow-x-hidden relative custom-scrollbar"
    @mouseover="expandSidebar"
    @mouseleave="collapseSidebar"
  >
    <div class="mb-8">
      <div
        :class="[
          'flex items-center justify-between cursor-pointer py-1 px-2 -mx-4'
        ]"
        @click="toggleGroup('ga4')"
      >
        <h2
          :class="[isSidebarCollapsed ? 'text-center' : '']"
          class="text-white dark:text-white font-bold text-sm mx-4"
        >
          GA4
        </h2>
        <font-awesome-icon
          v-if="!isSidebarCollapsed"
          :icon="['fac', ga4Icon]"
          class="h-5 w-5 text-white dark:text-white mx-4"
        />
      </div>
      <ul v-show="isGa4Expanded || isSidebarCollapsed" class="mt-2 space-y-2">
        <li
          v-for="route in ga4Routes"
          :key="route.path"
          class="group/item flex items-center py-1 px-2 transition-all duration-500 ease-in-out relative"
          :class="[
            isSidebarCollapsed ? 'gap-2 rounded-lg' : 'gap-2',
            isActive(route.path) ? 'bg-gradient-to-r from-blue-600 to-blue-500' : 'hover:shadow-2xl hover:shadow-blue-400 hover:-translate-y-px'
          ]"
        >
          <router-link
            :to="route.path"
            class="flex items-center w-full py-1 px-2 transition-all duration-500 ease-in-out"
          >
            <font-awesome-icon
              :icon="['fac', route.icon]"
              class="h-5 w-5 text-white dark:text-gray-800"
            />
            <span v-if="!isSidebarCollapsed" class="text-white dark:text-white text-xs ml-4 group-hover:font-bold">{{ route.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <hr class="my-4 border-gray-700 dark:border-gray-600" />
    <div class="mb-8">
      <div
        :class="[
          'flex items-center justify-between cursor-pointer py-1 px-2 -mx-4'
        ]"
        @click="toggleGroup('gsc')"
      >
        <h2
          :class="[isSidebarCollapsed ? 'text-center' : '']"
          class="text-white dark:text-white font-bold text-sm mx-4"
        >
          GSC
        </h2>
        <font-awesome-icon
          v-if="!isSidebarCollapsed"
          :icon="['fac', gscIcon]"
          class="h-5 w-5 text-white dark:text-white mx-4"
        />
      </div>
      <ul v-show="isGscExpanded || isSidebarCollapsed" class="mt-2 space-y-2">
        <li
          v-for="route in gscRoutes"
          :key="route.path"
          class="group/item flex items-center py-1 px-2 transition-all duration-500 ease-in-out relative"
          :class="[
            isSidebarCollapsed ? 'gap-2 rounded-lg' : 'gap-2',
            isActive(route.path) ? 'bg-gradient-to-r from-blue-600 to-blue-500' : 'hover:shadow-2xl hover:shadow-blue-400 hover:-translate-y-px'
          ]"
        >
          <router-link
            :to="route.path"
            class="flex items-center w-full py-1 px-2 transition-all duration-500 ease-in-out"
          >
            <font-awesome-icon
              :icon="['fac', route.icon]"
              class="h-5 w-5 text-white dark:text-gray-800"
            />
            <span v-if="!isSidebarCollapsed" class="text-white dark:text-white text-xs ml-4 group-hover:font-bold">{{ route.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <hr class="my-4 border-gray-700 dark:border-gray-600" />
    <div>
      <div
        :class="[
          'flex items-center justify-between cursor-pointer py-1 px-2 -mx-4'
        ]"
        @click="toggleGroup('order')"
      >
        <h2
          :class="[isSidebarCollapsed ? 'text-center' : '']"
          class="text-white dark:text-white font-bold text-sm mx-4"
        >
          Order
        </h2>
        <font-awesome-icon
          v-if="!isSidebarCollapsed"
          :icon="['fac', orderIcon]"
          class="h-5 w-5 text-white dark:text-white mx-4"
        />
      </div>
      <ul v-show="isOrderExpanded || isSidebarCollapsed" class="mt-2 space-y-2">
        <li
          v-for="route in orderRoutes"
          :key="route.path"
          class="group/item flex items-center py-1 px-2 transition-all duration-500 ease-in-out relative"
          :class="[
            isSidebarCollapsed ? 'gap-2 rounded-lg' : 'gap-2',
            isActive(route.path) ? 'bg-gradient-to-r from-blue-600 to-blue-500' : 'hover:shadow-2xl hover:shadow-blue-400 hover:-translate-y-px'
          ]"
        >
          <router-link
            :to="route.path"
            class="flex items-center w-full py-1 px-2 transition-all duration-500 ease-in-out"
          >
            <font-awesome-icon
              :icon="['fac', route.icon]"
              class="h-5 w-5 text-white dark:text-gray-800"
            />
            <span v-if="!isSidebarCollapsed" class="text-white dark:text-white text-xs ml-4 group-hover:font-bold">{{ route.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-center mt-8 relative" :class="{ 'right-0': isSidebarCollapsed }">
      <button
        @click="toggleSidebar"
        class="p-2 rounded-lg border-2 border-gray-700 hover:bg-gray-700 dark:hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
        @mouseover="handleMouseOverButton"
        @mouseleave="handleMouseOutButton"
      >
        <font-awesome-icon :icon="['fac', collapseIcon]" class="h-5 w-5 text-white dark:text-white group-hover/item:text-slate-500" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'Sidebar',
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isGa4Expanded = ref(false);
    const isGscExpanded = ref(false);
    const isOrderExpanded = ref(false);
    const isSidebarCollapsed = ref(false);
    const sidebarWidthClass = ref('w-52');
    const isMouseOverButton = ref(false);

    const ga4Routes = [
      { path: '/content/ga4-overview', name: 'Overview', icon: 'overview' },
      { path: '/content/ga4-detail-traffic', name: 'Detail Traffic', icon: 'detailTraffic' },
      { path: '/content/ga4-traffic-acquisition', name: 'Traffic Acquisition', icon: 'trafficAcquisition' },
      { path: '/content/ga4-engagements', name: 'Engagements', icon: 'engagements' },
      { path: '/content/ga4-detail-event', name: 'Detail Event', icon: 'detailEvent' },
    ];

    const gscRoutes = [
      { path: '/content/gsc-overview', name: 'Overview', icon: 'overview' },
      { path: '/content/gsc-detail', name: 'Detail', icon: 'gscDetail' },
    ];

    const orderRoutes = [
      { path: '/content/order-overview', name: 'Overview', icon: 'overview' },
      { path: '/content/order-seo', name: 'SEO', icon: 'seo' },
      { path: '/content/order-google-ads', name: 'Google Ads', icon: 'googleAds' },
      { path: '/content/order-direct', name: 'Direct', icon: 'direct' },
      { path: '/content/order-facebook', name: 'Facebook', icon: 'facebook' },
      { path: '/content/order-data-manager', name: 'Data Manager', icon: 'dataManager' },
    ];

    const toggleGroup = (group) => {
      if (group === 'ga4') isGa4Expanded.value = !isGa4Expanded.value;
      if (group === 'gsc') isGscExpanded.value = !isGscExpanded.value;
      if (group === 'order') isOrderExpanded.value = !isOrderExpanded.value;
    };

    const toggleSidebar = () => {
      isSidebarCollapsed.value = !isSidebarCollapsed.value;
      sidebarWidthClass.value = isSidebarCollapsed.value ? 'w-24' : 'w-52';
    };

    const expandSidebar = () => {
      if (isSidebarCollapsed.value) {
        sidebarWidthClass.value = 'w-52';
        setTimeout(() => {
          if (!isMouseOverButton.value) {
            sidebarWidthClass.value = 'w-24';
          }
        }, 500);
      }
    };

    const collapseSidebar = () => {
      if (isSidebarCollapsed.value && !isMouseOverButton.value) {
        sidebarWidthClass.value = 'w-24';
      }
    };

    // Event listeners for button hover
    const handleMouseOverButton = () => {
      isMouseOverButton.value = true;
    };

    const handleMouseOutButton = () => {
      isMouseOverButton.value = false;
      collapseSidebar();
    };

    const isActive = (path) => {
      return route.path === path;
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
      ga4Routes,
      gscRoutes,
      orderRoutes,
      toggleGroup,
      toggleSidebar,
      expandSidebar,
      collapseSidebar,
      handleMouseOverButton,
      handleMouseOutButton,
      isActive,
    };
  },
};
</script>

<style scoped>
.bg-lightgrey {
  background-color: #f0f0f0; /* Pretty light grey */
}

/* Custom slim scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px; /* Slim scrollbar width */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.custom-scrollbar::-webkit-scrollbar-thumb:active {
  background-color: #333;
  width: 8px; /* Expand scrollbar width on active/drag */
}

/* Hide scrollbar */
.overflow-hidden::-webkit-scrollbar {
  display: none;
}

.dark\:bg-sidebar-gradient-dark {
  background-image: linear-gradient(135deg, #4C6793 0%, #2E3B55 100%); /* Dark gradient */
}

.collapse-text {
  display: none;
}
</style>
