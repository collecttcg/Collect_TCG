navigator.serviceWorker.register(
  "./collect-tcg-service-worker.js",
  {
    scope:"./",
    updateViaCache:"none"
  }
);
