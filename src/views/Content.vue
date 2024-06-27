<template>
  <div class="content-area p-4 h-full dark:bg-gray-800 bg-light-blue">
    <h1 class="function-title text-sm font-bold mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
      <span class="lighter-text">{{ currentTitle.split(' / ')[0] }}</span>
      <span class="dark:text-white"> / {{ currentTitle.split(' / ')[1] }}</span>
    </h1>
    <div class="component-container max-w-full mx-auto p-4 border border-gray-300 dark:border-gray-700 overflow-auto h-[calc(100%-4rem)] bg-white dark:bg-gray-700 rounded-lg custom-scrollbar">
      <component :is="currentView" v-if="currentView" />
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue';

export default {
  name: 'Content',
  data() {
    return {
      viewComponents: {
        'ga4-overview': () => import('@/components/Content/GA4/Ga4Overview.vue'),
        'ga4-detail-traffic': () => import('@/components/Content/GA4/Ga4DetailTraffic.vue'),
        'ga4-traffic-acquisition': () => import('@/components/Content/GA4/Ga4TrafficAcquisition.vue'),
        'ga4-engagements': () => import('@/components/Content/GA4/Ga4Engagements.vue'),
        'ga4-detail-event': () => import('@/components/Content/GA4/Ga4DetailEvent.vue'),
        'gsc-overview': () => import('@/components/Content/GSC/GscOverview.vue'),
        'gsc-detail': () => import('@/components/Content/GSC/GscDetail.vue'),
        'order-overview': () => import('@/components/Content/Order/OrderOverview.vue'),
        'order-seo': () => import('@/components/Content/Order/OrderSeo.vue'),
        'order-google-ads': () => import('@/components/Content/Order/OrderGoogleAds.vue'),
        'order-direct': () => import('@/components/Content/Order/OrderDirect.vue'),
        'order-facebook': () => import('@/components/Content/Order/OrderFacebook.vue'),
        'order-data-manager': () => import('@/components/Content/Order/OrderDataManager.vue')
      },
      titles: {
        'ga4-overview': 'Google Analytics 4 / Overview',
        'ga4-detail-traffic': 'Google Analytics 4 / Detail Traffic',
        'ga4-traffic-acquisition': 'Google Analytics 4 / Traffic Acquisition',
        'ga4-engagements': 'Google Analytics 4 / Engagements',
        'ga4-detail-event': 'Google Analytics 4 / Detail Event',
        'gsc-overview': 'Google Search Console / Overview',
        'gsc-detail': 'Google Search Console / Detail',
        'order-overview': 'Order / Overview',
        'order-seo': 'Order / SEO',
        'order-google-ads': 'Order / Google Ads',
        'order-direct': 'Order / Direct',
        'order-facebook': 'Order / Facebook',
        'order-data-manager': 'Order / Data Manager'
      },
      currentComponent: null
    };
  },
  watch: {
    '$route.params.viewName': {
      handler(viewName) {
        if (viewName && this.viewComponents[viewName]) {
          this.loadComponent(viewName);
        } else {
          this.currentComponent = null;
        }
      },
      immediate: true
    }
  },
  computed: {
    currentTitle() {
      const viewName = this.$route.params.viewName;
      return this.titles[viewName] || 'Unknown Function';
    },
    currentView() {
      return this.currentComponent;
    }
  },
  methods: {
    async loadComponent(viewName) {
      const component = await this.viewComponents[viewName]();
      this.currentComponent = markRaw(component.default);
    }
  }
};
</script>

<style scoped>
.content-area {
  background-color: #f0f4f8; 
}

.dark .content-area {
  background-color: #1a202c; 
}

.component-container {
  background-color: transparent; 
}

.dark .component-container {
  background-color: transparent; 
}

.function-title {
  font-size: 0.875rem;
}

.lighter-text {
  color: #a0aec0;
}

.dark .content-area h1 {
  color: #ffffff; 
}

.content-area .component-container {
  max-width: 100%; 
  max-height: calc(100% - 4rem); 
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f0f4f8; 
}

.dark .custom-scrollbar::-webkit-scrollbar-track {
  background: #2d3748; 
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #a0aec0; 
  border-radius: 4px; 
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4a5568; 
  border-radius: 4px; 
}
</style>
