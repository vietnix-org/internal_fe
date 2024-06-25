<template>
  <div
    :class="[
      'transition-all duration-500 ease-in-out',
      isSidebarCollapsed ? 'w-20' : sidebarWidthClass
    ]"
    class="bg-lightgrey dark:bg-sidebarDark h-full px-4 py-6 overflow-y-auto overflow-x-hidden"
    @mouseover="expandSidebar"
    @mouseleave="collapseSidebar"
  >
    <div class="mb-8">
      <div class="flex items-center justify-between cursor-pointer" @click="toggleGroup('ga4')">
        <h2 :class="[isSidebarCollapsed ? 'text-center' : '']" class="text-gray-900 dark:text-black font-bold text-sm hover:opacity-75">GA4</h2>
        <img v-if="!isSidebarCollapsed" :src="ga4Icon" alt="Toggle" class="h-5 w-5 hover:opacity-75" />
      </div>
      <transition name="dropdown">
        <ul v-show="isGa4Expanded || isSidebarCollapsed" class="overflow-hidden mt-4">
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/overview.svg" alt="Overview" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Overview</span>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/ga4/detail_traffic.svg" alt="Detail Traffic" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Detail Traffic</span>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/ga4/traffic_acquisition.svg" alt="Traffic Acquisition" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Traffic Acquisition</span>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/ga4/engagements.svg" alt="Engagements" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Engagements</span>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/ga4/detail_event.svg" alt="Detail Event" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Detail Event</span>
          </li>
        </ul>
      </transition>
    </div>
    <hr class="my-4 border-gray-300 dark:border-gray-600">
    <div class="mb-8">
      <div class="flex items-center justify-between cursor-pointer" @click="toggleGroup('gsc')">
        <h2 :class="[isSidebarCollapsed ? 'text-center' : '']" class="text-gray-900 dark:text-black font-bold text-sm hover:opacity-75">GSC</h2>
        <img v-if="!isSidebarCollapsed" :src="gscIcon" alt="Toggle" class="h-5 w-5 hover:opacity-75" />
      </div>
      <transition name="dropdown">
        <ul v-show="isGscExpanded || isSidebarCollapsed" class="overflow-hidden mt-4">
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/overview.svg" alt="Overview" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Overview</span>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/gsc/detail.svg" alt="Detail" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Detail</span>
          </li>
        </ul>
      </transition>
    </div>
    <hr class="my-4 border-gray-300 dark:border-gray-600">
    <div>
      <div class="flex items-center justify-between cursor-pointer" @click="toggleGroup('order')">
        <h2 :class="[isSidebarCollapsed ? 'text-center' : '']" class="text-gray-900 dark:text-black font-bold text-sm hover:opacity-75">Order</h2>
        <img v-if="!isSidebarCollapsed" :src="orderIcon" alt="Toggle" class="h-5 w-5 hover:opacity-75" />
      </div>
      <transition name="dropdown">
        <ul v-show="isOrderExpanded || isSidebarCollapsed" class="overflow-hidden mt-4">
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/overview.svg" alt="Overview" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Overview</span>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/order/seo.svg" alt="SEO" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">SEO</span>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/order/google_ads.svg" alt="Google Ads" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Google Ads</span>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/order/direct.svg" alt="Direct" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Direct</span>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/order/facebook.svg" alt="Facebook" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Facebook</span>
          </li>
          <li :class="['flex items-center py-4 hover:opacity-75', isSidebarCollapsed ? 'gap-2' : 'gap-4']">
            <img :class="[isSidebarCollapsed ? 'h-4 w-4' : 'h-5 w-5']" src="@/images/sidebar_icons/order/data_manager.svg" alt="Data Manager" />
            <span v-if="!isSidebarCollapsed" class="text-gray-700 dark:text-black text-xs hover:opacity-75">Data Manager</span>
          </li>
        </ul>
      </transition>
    </div>
    <div class="flex justify-center mt-8">
      <button @click="toggleSidebar" class="p-2">
        <img :src="collapseIcon" alt="Collapse" class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script>
import angleUp from '@/images/sidebar_icons/angle-up.svg';
import angleDown from '@/images/sidebar_icons/angle-down.svg';
import collapseIcon from '@/images/sidebar_icons/collapse.svg';
import expandIcon from '@/images/sidebar_icons/expand.svg';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar',
  data() {
    return {
      isGa4Expanded: false,
      isGscExpanded: false,
      isOrderExpanded: false,
      isSidebarCollapsed: false,
      sidebarWidthClass: 'w-52' // Reduced max width
    }
  },
  computed: {
    ga4Icon() {
      return this.isGa4Expanded ? angleDown : angleUp;
    },
    gscIcon() {
      return this.isGscExpanded ? angleDown : angleUp;
    },
    orderIcon() {
      return this.isOrderExpanded ? angleDown : angleUp;
    },
    collapseIcon() {
      return this.isSidebarCollapsed ? expandIcon : collapseIcon;
    }
  },
  methods: {
    toggleGroup(group) {
      this[`is${group.charAt(0).toUpperCase() + group.slice(1)}Expanded`] =
        !this[`is${group.charAt(0).toUpperCase() + group.slice(1)}Expanded`]
    },
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
      this.sidebarWidthClass = this.isSidebarCollapsed ? 'w-20' : 'w-52'; // Increased min width and reduced max width
    },
    expandSidebar() {
      if (this.isSidebarCollapsed) {
        this.sidebarWidthClass = 'w-52';
      }
    },
    collapseSidebar() {
      if (this.isSidebarCollapsed) {
        this.sidebarWidthClass = 'w-20';
      }
    }
  }
}
</script>

<style scoped>
.bg-lightgrey {
  background-color: #d3d3d3;
}

.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.5s ease;
}
.dropdown-enter, .dropdown-leave-to {
  height: 0;
  opacity: 0;
}

.overflow-hidden::-webkit-scrollbar {
  display: none; /* Hide horizontal scrollbar */
}
</style>
