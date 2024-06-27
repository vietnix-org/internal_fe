<template>
  <div
    :class="[
      'transition-all duration-300 ease-in-out',
      isSidebarCollapsed ? 'w-20' : sidebarWidthClass
    ]"
    class="bg-lightmode dark:bg-darkmode h-full px-4 py-6 overflow-y-auto overflow-x-hidden relative"
    @mouseover="expandSidebar"
    @mouseleave="collapseSidebar"
  >
    <div class="mb-8">
      <div
        class="flex items-center justify-between cursor-pointer"
        @click="toggleGroup('ga4')"
      >
        <h2
          :class="[isSidebarCollapsed ? 'text-center' : '']"
          class="text-gray-900 dark:text-white font-bold text-sm hover:opacity-75"
        >
          GA4
        </h2>
        <font-awesome-icon
          v-if="!isSidebarCollapsed"
          :icon="['fac', isGa4Expanded ? 'angleDown' : 'angleUp']"
          class="h-4 w-4 hover:opacity-75 rounded-corner-icon"
        />
      </div>
      <ul v-show="isGa4Expanded || isSidebarCollapsed" class="overflow-hidden mt-4">
        <li
          v-for="route in ga4Routes"
          :key="route.path"
          :class="[
            'flex items-center py-4 hover:opacity-75',
            isSidebarCollapsed ? 'gap-2' : 'gap-4',
          ]"
        >
          <router-link
            :to="route.path"
            class="flex items-center w-full"
          >
            <font-awesome-icon
              :icon="['fac', route.icon]"
              :class="[isSidebarCollapsed ? 'h-3 w-3' : 'h-4 w-4']"
            />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">{{ route.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <hr class="my-4 border-gray-300 dark:border-gray-600" />
    <div class="mb-8">
      <div
        class="flex items-center justify-between cursor-pointer"
        @click="toggleGroup('gsc')"
      >
        <h2
          :class="[isSidebarCollapsed ? 'text-center' : '']"
          class="text-gray-900 dark:text-white font-bold text-sm hover:opacity-75"
        >
          GSC
        </h2>
        <font-awesome-icon
          v-if="!isSidebarCollapsed"
          :icon="['fac', isGscExpanded ? 'angleDown' : 'angleUp']"
          class="h-4 w-4 hover:opacity-75 rounded-corner-icon"
        />
      </div>
      <ul v-show="isGscExpanded || isSidebarCollapsed" class="overflow-hidden mt-4">
        <li
          v-for="route in gscRoutes"
          :key="route.path"
          :class="[
            'flex items-center py-4 hover:opacity-75',
            isSidebarCollapsed ? 'gap-2' : 'gap-4',
          ]"
        >
          <router-link
            :to="route.path"
            class="flex items-center w-full"
          >
            <font-awesome-icon
              :icon="['fac', route.icon]"
              :class="[isSidebarCollapsed ? 'h-3 w-3' : 'h-4 w-4']"
            />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">{{ route.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <hr class="my-4 border-gray-300 dark:border-gray-600" />
    <div>
      <div
        class="flex items-center justify-between cursor-pointer"
        @click="toggleGroup('order')"
      >
        <h2
          :class="[isSidebarCollapsed ? 'text-center' : '']"
          class="text-gray-900 dark:text-white font-bold text-sm hover:opacity-75"
        >
          Order
        </h2>
        <font-awesome-icon
          v-if="!isSidebarCollapsed"
          :icon="['fac', isOrderExpanded ? 'angleDown' : 'angleUp']"
          class="h-4 w-4 hover:opacity-75 rounded-corner-icon"
        />
      </div>
      <ul v-show="isOrderExpanded || isSidebarCollapsed" class="overflow-hidden mt-4">
        <li
          v-for="route in orderRoutes"
          :key="route.path"
          :class="[
            'flex items-center py-4 hover:opacity-75',
            isSidebarCollapsed ? 'gap-2' : 'gap-4',
          ]"
        >
          <router-link
            :to="route.path"
            class="flex items-center w-full"
          >
            <font-awesome-icon
              :icon="['fac', route.icon]"
              :class="[isSidebarCollapsed ? 'h-3 w-3' : 'h-4 w-4']"
            />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">{{ route.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
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

    const ga4Routes = [
      { path: '/content/ga4-overview', name: 'GA4 Overview', icon: 'overview' },
      { path: '/content/ga4-detail-traffic', name: 'GA4 Detail Traffic', icon: 'detailTraffic' },
      { path: '/content/ga4-traffic-acquisition', name: 'GA4 Traffic Acquisition', icon: 'trafficAcquisition' },
      { path: '/content/ga4-engagements', name: 'GA4 Engagements', icon: 'engagements' },
      { path: '/content/ga4-detail-event', name: 'GA4 Detail Event', icon: 'detailEvent' },
    ];

    const gscRoutes = [
      { path: '/content/gsc-overview', name: 'GSC Overview', icon: 'overview' },
      { path: '/content/gsc-detail', name: 'GSC Detail', icon: 'gscDetail' },
    ];

    const orderRoutes = [
      { path: '/content/order-overview', name: 'Order Overview', icon: 'overview' },
      { path: '/content/order-seo', name: 'Order SEO', icon: 'seo' },
      { path: '/content/order-google-ads', name: 'Order Google Ads', icon: 'googleAds' },
      { path: '/content/order-direct', name: 'Order Direct', icon: 'direct' },
      { path: '/content/order-facebook', name: 'Order Facebook', icon: 'facebook' },
      { path: '/content/order-data-manager', name: 'Order Data Manager', icon: 'dataManager' },
    ];

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

    return {
      isGa4Expanded,
      isGscExpanded,
      isOrderExpanded,
      isSidebarCollapsed,
      sidebarWidthClass,
      ga4Routes,
      gscRoutes,
      orderRoutes,
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

/* Icon styles */
.icon {
  filter: invert(0%);
}
.dark .icon {
  filter: invert(100%);
}

/* Text styles */
.text-gray-900 { /* Base text color for dark mode */
  color: #111827;
}
.dark .text-gray-900 { /* Override text color for dark mode */
  color: white;
}
.text-gray-700 { /* Consistent text color across themes */
  color: #333;
}

/* Hide scrollbar */
.overflow-hidden::-webkit-scrollbar {
  display: none;
}

/* Button styles */
.rounded-corner-button {
  border: 2px solid #333; /* Change border color as needed */
  border-radius: 8px; /* Rounded corners */
  transition: transform 0.2s; /* Add transition for movement */
}

.rounded-corner-button:hover {
  transform: translateY(-2px); /* Move up slightly on hover */
}

/* Icon styles */
.rounded-corner-icon {
  border: 2px solid #333; /* Change border color as needed */
  border-radius: 8px; /* Rounded corners */
  padding: 2px; /* Adds some space around the icon */
  transition: transform 0.2s; /* Add transition for movement */
}

.rounded-corner-icon:hover {
  transform: translateY(-2px); /* Move up slightly on hover */
}
</style>
