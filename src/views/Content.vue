<template>
  <div>
    <h1 class="text-xl font-bold mb-4">{{ currentTitle }}</h1>
    <component :is="currentView" v-if="currentView" />
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
        'ga4-overview': 'GA4 / Overview',
        'ga4-detail-traffic': 'GA4 / Detail Traffic',
        'ga4-traffic-acquisition': 'GA4 / Traffic Acquisition',
        'ga4-engagements': 'GA4 / Engagements',
        'ga4-detail-event': 'GA4 / Detail Event',
        'gsc-overview': 'GSC / Overview',
        'gsc-detail': 'GSC / Detail',
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
/* Add styles here if needed */
</style>
