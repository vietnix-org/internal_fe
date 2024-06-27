<template>
  <div class="ga4-overview">
    <h1 class="text-2xl font-bold mb-4">GA4 Overview</h1>
    <p class="mb-4">
      Welcome to the GA4 Overview page. Here you can find insights and analytics
      about your GA4 data.
    </p>
    <div class="analytics-section">
      <h2 class="text-xl font-semibold mb-2">Key Metrics</h2>
      <ul class="metrics-list">
        <li class="metric-item">
          <span class="metric-label">Users:</span>
          <span class="metric-value">12345</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Sessions:</span>
          <span class="metric-value">67890</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Bounce Rate:</span>
          <span class="metric-value">56%</span>
        </li>
      </ul>
      <ul class="metrics-list">
        <li class="metric-item">
          <span class="metric-label">Users:</span>
          <span class="metric-value">12345</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Sessions:</span>
          <span class="metric-value">67890</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Bounce Rate:</span>
          <span class="metric-value">56%</span>
        </li>
      </ul>
      <ul class="metrics-list">
        <li class="metric-item">
          <span class="metric-label">Users:</span>
          <span class="metric-value">12345</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Sessions:</span>
          <span class="metric-value">67890</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Bounce Rate:</span>
          <span class="metric-value">56%</span>
        </li>
      </ul>
      <ul class="metrics-list">
        <li class="metric-item">
          <span class="metric-label">Users:</span>
          <span class="metric-value">12345</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Sessions:</span>
          <span class="metric-value">67890</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Bounce Rate:</span>
          <span class="metric-value">56%</span>
        </li>
      </ul>
      <ul class="metrics-list">
        <li class="metric-item">
          <span class="metric-label">Users:</span>
          <span class="metric-value">12345</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Sessions:</span>
          <span class="metric-value">67890</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Bounce Rate:</span>
          <span class="metric-value">56%</span>
        </li>
      </ul>
      <ul class="metrics-list">
        <li class="metric-item">
          <span class="metric-label">Users:</span>
          <span class="metric-value">12345</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Sessions:</span>
          <span class="metric-value">67890</span>
        </li>
        <li class="metric-item">
          <span class="metric-label">Bounce Rate:</span>
          <span class="metric-value">56%</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GA4Overview',
  data() {
    return {
      // Add your data properties here
    };
  },
  methods: {
    // Add your methods here
  },
  computed: {
    // Add your computed properties here
  },
  mounted() {
    // Add any initialization logic here
  }
};
</script>

<style scoped>
.ga4-overview {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.analytics-section {
  margin-top: 16px;
}

.metrics-list {
  list-style: none;
  padding: 0;
}

.metric-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
}

.metric-label {
  font-weight: bold;
}

.metric-value {
  color: #555;
}
</style>
