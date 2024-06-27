<template>
  <div
    :class="[
      'transition-all duration-300 ease-in-out',
      isSidebarCollapsed ? 'w-24' : sidebarWidthClass
    ]"
    class="bg-gray-800 dark:bg-gray-900 h-full px-4 py-6 overflow-y-scroll overflow-x-hidden relative custom-scrollbar"
    @mouseover="expandSidebar"
    @mouseleave="collapseSidebar"
  >
    <div class="mb-8">
      <div
        :class="[
          'flex items-center justify-between cursor-pointer py-1 px-2 -mx-4',
          !isGa4Expanded ? (isSidebarCollapsed ? '' : 'hover:bg-gray-700 dark:hover:bg-gray-700 no-radius') : ''
        ]"
        @click="toggleGroup('ga4')"
      >
        <h2
          :class="[isSidebarCollapsed ? 'text-center' : '']"
          class="text-white dark:text-white font-bold text-sm hover:opacity-75 mx-4"
        >
          GA4
        </h2>
        <font-awesome-icon
          v-if="!isSidebarCollapsed"
          :icon="['fac', ga4Icon]"
          class="h-5 w-5 text-white dark:text-white hover:opacity-75 mx-4"
        />
      </div>
      <ul v-show="isGa4Expanded || isSidebarCollapsed" class="mt-2">
        <li
          v-for="route in ga4Routes"
          :key="route.path"
          class="group/item flex items-center py-1 px-2 rounded-lg transition-all duration-200 ease-in-out"
          :class="[
            isSidebarCollapsed ? 'gap-2' : 'gap-4',
            isActive(route.path) ? 'bg-gray-600 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-700 transform hover:scale-101'
          ]"
        >
          <router-link
            :to="route.path"
            class="flex items-center w-full p-2 rounded-lg transition-all duration-200 ease-in-out"
            :class="isActive(route.path) ? 'bg-gray-600 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-700 transform hover:scale-101'"
          >
            <font-awesome-icon
              :icon="['fac', route.icon]"
              class="h-5 w-5 text-white dark:text-white group-hover:scale-101"
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
          'flex items-center justify-between cursor-pointer py-1 px-2 -mx-4',
          !isGscExpanded ? (isSidebarCollapsed ? '' : 'hover:bg-gray-700 dark:hover:bg-gray-700 no-radius') : ''
        ]"
        @click="toggleGroup('gsc')"
      >
        <h2
          :class="[isSidebarCollapsed ? 'text-center' : '']"
          class="text-white dark:text-white font-bold text-sm hover:opacity-75 mx-4"
        >
          GSC
        </h2>
        <font-awesome-icon
          v-if="!isSidebarCollapsed"
          :icon="['fac', gscIcon]"
          class="h-5 w-5 text-white dark:text-white hover:opacity-75 mx-4"
        />
      </div>
      <ul v-show="isGscExpanded || isSidebarCollapsed" class="mt-2">
        <li
          v-for="route in gscRoutes"
          :key="route.path"
          class="group/item flex items-center py-1 px-2 rounded-lg transition-all duration-200 ease-in-out"
          :class="[
            isSidebarCollapsed ? 'gap-2' : 'gap-4',
            isActive(route.path) ? 'bg-gray-600 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-700 transform hover:scale-101'
          ]"
        >
          <router-link
            :to="route.path"
            class="flex items-center w-full p-2 rounded-lg transition-all duration-200 ease-in-out"
            :class="isActive(route.path) ? 'bg-gray-600 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-700 transform hover:scale-101'"
          >
            <font-awesome-icon
              :icon="['fac', route.icon]"
              class="h-5 w-5 text-white dark:text-white group-hover:scale-101"
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
          'flex items-center justify-between cursor-pointer py-1 px-2 -mx-4',
          !isOrderExpanded ? (isSidebarCollapsed ? '' : 'hover:bg-gray-700 dark:hover:bg-gray-700 no-radius') : ''
        ]"
        @click="toggleGroup('order')"
      >
        <h2
          :class="[isSidebarCollapsed ? 'text-center' : '']"
          class="text-white dark:text-white font-bold text-sm hover:opacity-75 mx-4"
        >
          Order
        </h2>
        <font-awesome-icon
          v-if="!isSidebarCollapsed"
          :icon="['fac', orderIcon]"
          class="h-5 w-5 text-white dark:text-white hover:opacity-75 mx-4"
        />
      </div>
      <ul v-show="isOrderExpanded || isSidebarCollapsed" class="mt-2">
        <li
          v-for="route in orderRoutes"
          :key="route.path"
          class="group/item flex items-center py-1 px-2 rounded-lg transition-all duration-200 ease-in-out"
          :class="[
            isSidebarCollapsed ? 'gap-2' : 'gap-4',
            isActive(route.path) ? 'bg-gray-600 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-700 transform hover:scale-101'
          ]"
        >
          <router-link
            :to="route.path"
            class="flex items-center w-full p-2 rounded-lg transition-all duration-200 ease-in-out"
            :class="isActive(route.path) ? 'bg-gray-600 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-700 transform hover:scale-101'"
          >
            <font-awesome-icon
              :icon="['fac', route.icon]"
              class="h-5 w-5 text-white dark:text-white group-hover:scale-101"
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
.bg-lightmode {
  background-color: #2d2d2d;
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

/* Custom hover effect */
.hover\:bg-gray-700:hover {
  background-color: #4a5568;
  margin-left: -16px;
  margin-right: -16px;
  border-radius: 0;
}

.dark\:hover\:bg-gray-700:hover {
  background-color: #4a5568;
  margin-left: -16px;
  margin-right: -16px;
  border-radius: 0;
}

/* Remove border-radius on group name hover */
.no-radius:hover {
  border-radius: 0 !important;
}

/* Bold text on hover */
.group-hover\:font-bold:hover .group-hover\:font-bold {
  font-weight: bold;
}

/* Subtle scale effect */
.group-hover\:scale-101:hover .group-hover\:scale-101 {
  transform: scale(1.01);
}
</style>
