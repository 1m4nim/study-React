// import type { ReportHandler } from "web-vitals";
// import * as webVitals from "web-vitals";

// const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
//   if (onPerfEntry && typeof onPerfEntry === "function") {
//     webVitals.getCLS(onPerfEntry);
//     webVitals.getFID(onPerfEntry);
//     webVitals.getFCP(onPerfEntry);
//     webVitals.getLCP(onPerfEntry);
//     webVitals.getTTFB(onPerfEntry);
//   }
// };

// export default reportWebVitals;

// import type { Metric } from "web-vitals";
// import * as webVitals from "web-vitals";

// const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
//   if (onPerfEntry) {
//     webVitals.getCLS(onPerfEntry);
//     webVitals.getFID(onPerfEntry);
//     webVitals.getFCP(onPerfEntry);
//     webVitals.getLCP(onPerfEntry);
//     webVitals.getTTFB(onPerfEntry);
//   }
// };

// export default reportWebVitals;

import type { Metric } from "web-vitals";
import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals";

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
  if (onPerfEntry) {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
