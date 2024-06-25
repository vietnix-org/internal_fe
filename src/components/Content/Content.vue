<template>
  <div>
    <h1 class="text-xl font-bold mb-4">{{ currentTitle }}</h1>
    <component :is="currentView" />
  </div>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      viewComponents: {
        'ga4-overview': () => import('@/views/contentViews/GA4/Ga4Overview.vue'),
        'ga4-detail-traffic': () => import('@/views/contentViews/GA4/Ga4DetailTraffic.vue'),
        'ga4-traffic-acquisition': () => import('@/views/contentViews/GA4/Ga4TrafficAcquisition.vue'),
        'ga4-engagements': () => import('@/views/contentViews/GA4/Ga4Engagements.vue'),
        'ga4-detail-event': () => import('@/views/contentViews/GA4/Ga4DetailEvent.vue'),
        'gsc-overview': () => import('@/views/contentViews/GSC/GscOverview.vue'),
        'gsc-detail': () => import('@/views/contentViews/GSC/GscDetail.vue'),
        'order-overview': () => import('@/views/contentViews/Order/OrderOverview.vue'),
        'order-seo': () => import('@/views/contentViews/Order/OrderSeo.vue'),
        'order-google-ads': () => import('@/views/contentViews/Order/OrderGoogleAds.vue'),
        'order-direct': () => import('@/views/contentViews/Order/OrderDirect.vue'),
        'order-facebook': () => import('@/views/contentViews/Order/OrderFacebook.vue'),
        'order-data-manager': () => import('@/views/contentViews/Order/OrderDataManager.vue')
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
      }
    }
  },
  computed: {
    currentView() {
      const viewName = this.$route.params.viewName;
      return this.viewComponents[viewName] || null;
    },
    currentTitle() {
      const viewName = this.$route.params.viewName;
      return this.titles[viewName] || 'Unknown Function';
    }
  }
}
</script>

<style scoped>
/* Add styles here if needed */
</style>
