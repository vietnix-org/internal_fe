import { library } from '@fortawesome/fontawesome-svg-core';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

// Import custom SVGs as strings (add ?raw at the end of each SVG path)
import overview from '@/images/sidebar_icons/overview.svg?raw';
import expand from '@/images/sidebar_icons/expand.svg?raw';
import collapse from '@/images/sidebar_icons/collapse.svg?raw';
import angleUp from '@/images/sidebar_icons/angle-up.svg?raw';
import angleDown from '@/images/sidebar_icons/angle-down.svg?raw';
import detailEvent from '@/images/sidebar_icons/ga4/detail_event.svg?raw';
import detailTraffic from '@/images/sidebar_icons/ga4/detail_traffic.svg?raw';
import engagements from '@/images/sidebar_icons/ga4/engagements.svg?raw';
import trafficAcquisition from '@/images/sidebar_icons/ga4/traffic_acquisition.svg?raw';
import gscDetail from '@/images/sidebar_icons/gsc/detail.svg?raw';
import dataManager from '@/images/sidebar_icons/order/data_manager.svg?raw';
import direct from '@/images/sidebar_icons/order/direct.svg?raw';
import facebook from '@/images/sidebar_icons/order/facebook.svg?raw';
import googleAds from '@/images/sidebar_icons/order/google_ads.svg?raw';
import seo from '@/images/sidebar_icons/order/seo.svg?raw';

// Function to extract path data (d attribute) from an SVG string
function extractPathData(svgString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  const path = doc.querySelector('path');
  return path ? path.getAttribute('d') : '';
}

// Define custom icons using extracted path data
library.add(
  faAngleUp, 
  faAngleDown, 
  faBars,
  { prefix: 'fac', iconName: 'overview', icon: [512, 512, [], null, extractPathData(overview)] },
  { prefix: 'fac', iconName: 'expand', icon: [512, 512, [], null, extractPathData(expand)] },
  { prefix: 'fac', iconName: 'collapse', icon: [512, 512, [], null, extractPathData(collapse)] },
  { prefix: 'fac', iconName: 'angleUp', icon: [512, 512, [], null, extractPathData(angleUp)] },
  { prefix: 'fac', iconName: 'angleDown', icon: [512, 512, [], null, extractPathData(angleDown)] },
  { prefix: 'fac', iconName: 'detailEvent', icon: [512, 512, [], null, extractPathData(detailEvent)] },
  { prefix: 'fac', iconName: 'detailTraffic', icon: [512, 512, [], null, extractPathData(detailTraffic)] },
  { prefix: 'fac', iconName: 'engagements', icon: [512, 512, [], null, extractPathData(engagements)] },
  { prefix: 'fac', iconName: 'trafficAcquisition', icon: [512, 512, [], null, extractPathData(trafficAcquisition)] },
  { prefix: 'fac', iconName: 'gscDetail', icon: [512, 512, [], null, extractPathData(gscDetail)] },
  { prefix: 'fac', iconName: 'dataManager', icon: [512, 512, [], null, extractPathData(dataManager)] },
  { prefix: 'fac', iconName: 'direct', icon: [512, 512, [], null, extractPathData(direct)] },
  { prefix: 'fac', iconName: 'facebook', icon: [512, 512, [], null, extractPathData(facebook)] },
  { prefix: 'fac', iconName: 'googleAds', icon: [512, 512, [], null, extractPathData(googleAds)] },
  { prefix: 'fac', iconName: 'seo', icon: [512, 512, [], null, extractPathData(seo)] }
);

dom.watch();
