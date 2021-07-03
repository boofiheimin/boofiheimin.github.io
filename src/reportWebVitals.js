const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export function sendToAnalytics({ name, delta, value, id }) {
  window.gtag("event", name, {
    value: delta, // Use `delta` so the value can be summed.
    metric_id: id, // Needed to aggregate events.
    metric_value: value,
    metric_delta: delta,
  });
}

export default reportWebVitals;
