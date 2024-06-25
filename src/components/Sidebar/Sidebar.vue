<template>
  <div class="bg-white dark:bg-sidebarDark h-full w-64 px-4 py-6">
    <div class="mb-6">
      <div class="flex items-center justify-between cursor-pointer" @click="toggleGroup('ga4')">
        <h2 class="text-gray-900 dark:text-black font-bold text-lg">GA4</h2>
        <img :src="ga4Icon" alt="Toggle" class="h-5 w-5" />
      </div>
      <ul v-if="isGa4Expanded">
        <li class="flex items-center py-2">
          <img src="@/images/sidebar_icons/overview.svg" alt="Overview" class="h-5 w-5 mr-2" />
          <span class="text-gray-700 dark:text-black">Overview</span>
        </li>
        <li class="flex items-center py-2">
          <img
            src="@/images/sidebar_icons/ga4/detail_traffic.svg"
            alt="Detail Traffic"
            class="h-5 w-5 mr-2"
          />
          <span class="text-gray-700 dark:text-black">Detail Traffic</span>
        </li>
        <li class="flex items-center py-2">
          <img
            src="@/images/sidebar_icons/ga4/traffic_acquisition.svg"
            alt="Traffic Acquisition"
            class="h-5 w-5 mr-2"
          />
          <span class="text-gray-700 dark:text-black">Traffic Acquisition</span>
        </li>
        <li class="flex items-center py-2">
          <img
            src="@/images/sidebar_icons/ga4/engagements.svg"
            alt="Engagements"
            class="h-5 w-5 mr-2"
          />
          <span class="text-gray-700 dark:text-black">Engagements</span>
        </li>
        <li class="flex items-center py-2">
          <img
            src="@/images/sidebar_icons/ga4/detail_event.svg"
            alt="Detail Event"
            class="h-5 w-5 mr-2"
          />
          <span class="text-gray-700 dark:text-black">Detail Event</span>
        </li>
      </ul>
    </div>
    <div class="mb-6">
      <div class="flex items-center justify-between cursor-pointer" @click="toggleGroup('gsc')">
        <h2 class="text-gray-900 dark:text-black font-bold text-lg">GSC</h2>
        <img :src="gscIcon" alt="Toggle" class="h-5 w-5" />
      </div>
      <ul v-if="isGscExpanded">
        <li class="flex items-center py-2">
          <img src="@/images/sidebar_icons/overview.svg" alt="Overview" class="h-5 w-5 mr-2" />
          <span class="text-gray-700 dark:text-black">Overview</span>
        </li>
        <li class="flex items-center py-2">
          <img src="@/images/sidebar_icons/gsc/detail.svg" alt="Detail" class="h-5 w-5 mr-2" />
          <span class="text-gray-700 dark:text-black">Detail</span>
        </li>
      </ul>
    </div>
    <div>
      <div class="flex items-center justify-between cursor-pointer" @click="toggleGroup('order')">
        <h2 class="text-gray-900 dark:text-black font-bold text-lg">Order</h2>
        <img :src="orderIcon" alt="Toggle" class="h-5 w-5" />
      </div>
      <ul v-if="isOrderExpanded">
        <li class="flex items-center py-2">
          <img src="@/images/sidebar_icons/overview.svg" alt="Overview" class="h-5 w-5 mr-2" />
          <span class="text-gray-700 dark:text-black">Overview</span>
        </li>
        <li class="flex items-center py-2">
          <img src="@/images/sidebar_icons/order/seo.svg" alt="SEO" class="h-5 w-5 mr-2" />
          <span class="text-gray-700 dark:text-black">SEO</span>
        </li>
        <li class="flex items-center py-2">
          <img
            src="@/images/sidebar_icons/order/google_ads.svg"
            alt="Google Ads"
            class="h-5 w-5 mr-2"
          />
          <span class="text-gray-700 dark:text-black">Google Ads</span>
        </li>
        <li class="flex items-center py-2">
          <img src="@/images/sidebar_icons/order/direct.svg" alt="Direct" class="h-5 w-5 mr-2" />
          <span class="text-gray-700 dark:text-black">Direct</span>
        </li>
        <li class="flex items-center py-2">
          <img
            src="@/images/sidebar_icons/order/facebook.svg"
            alt="Facebook"
            class="h-5 w-5 mr-2"
          />
          <span class="text-gray-700 dark:text-black">Facebook</span>
        </li>
        <li class="flex items-center py-2">
          <img
            src="@/images/sidebar_icons/order/data_manager.svg"
            alt="Data Manager"
            class="h-5 w-5 mr-2"
          />
          <span class="text-gray-700 dark:text-black">Data Manager</span>
        </li>
      </ul>
    </div>
    <div class="flex justify-center mt-6">
      <button class="bg-lightblue dark:bg-darkblue text-white p-2 rounded-full">
        <img :src="collapseIcon" alt="Collapse" class="h-5 w-5 inline-block" @load="imageLoaded" />
      </button>
    </div>
  </div>
</template>

<script>
import angleUp from '@/images/sidebar_icons/angle-up.svg'
import angleDown from '@/images/sidebar_icons/angle-down.svg'
import collapseIcon from '@/images/sidebar_icons/collapse.svg'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar',
  data() {
    return {
      isGa4Expanded: false,
      isGscExpanded: false,
      isOrderExpanded: false
    }
  },
  computed: {
    ga4Icon() {
      return this.isGa4Expanded ? angleDown : angleUp
    },
    gscIcon() {
      return this.isGscExpanded ? angleDown : angleUp
    },
    orderIcon() {
      return this.isOrderExpanded ? angleDown : angleUp
    },
    collapseIcon() {
      return collapseIcon
    }
  },
  methods: {
    toggleGroup(group) {
      this[`is${group.charAt(0).toUpperCase() + group.slice(1)}Expanded`] =
        !this[`is${group.charAt(0).toUpperCase() + group.slice(1)}Expanded`]
    },
    imageLoaded() {
      console.log('Image loaded successfully')
    }
  }
}
</script>

<style scoped></style>
