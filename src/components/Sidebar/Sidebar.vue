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
          :icon="['fac', ga4Icon]"
          class="h-5 w-5 hover:opacity-75"
        />
      </div>
      <transition name="dropdown">
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
              @click.prevent="navigateWithDelay(route.path)"
            >
              <font-awesome-icon
                :icon="['fac', route.icon]"
                :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']"
              />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">{{ route.name }}</span>
            </router-link>
          </li>
        </ul>
      </transition>
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
          :icon="['fac', gscIcon]"
          class="h-5 w-5 hover:opacity-75"
        />
      </div>
      <transition name="dropdown">
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
              @click.prevent="navigateWithDelay(route.path)"
            >
              <font-awesome-icon
                :icon="['fac', route.icon]"
                :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']"
              />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">{{ route.name }}</span>
            </router-link>
          </li>
        </ul>
      </transition>
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
          :icon="['fac', orderIcon]"
          class="h-5 w-5 hover:opacity-75"
        />
      </div>
      <transition name="dropdown">
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
              @click.prevent="navigateWithDelay(route.path)"
            >
              <font-awesome-icon
                :icon="['fac', route.icon]"
                :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']"
              />
              <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-white text-xs ml-4">{{ route.name }}</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
    <div class="flex items-center justify-center mt-8 relative" :class="{ 'right-0': isSidebarCollapsed }">
      <button
        @click="toggleSidebar"
        class="p-2"
        @mouseover="handleMouseOverButton"
        @mouseleave="handleMouseOutButton"
      >
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
      collapseSidebar();
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

/* Dropdown transition styles */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s ease;
}
.dropdown-enter,
.dropdown-leave-to {
  height: 0;
  opacity: 0;
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
</style>
