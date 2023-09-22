import { datadogRum } from "@datadog/browser-rum";

export default defineNuxtPlugin(() => {
  datadogRum.init({
    applicationId: "289f3d76-533a-4e6a-8b94-c8e7757ca2be",
    clientToken: "pubc17c5c98a74ec7ee96513bc4fc07a9ce",
    site: "datadoghq.com",
    service: "nuxt-demo",
    env: "dev",
    // Specify a version number to identify the deployed version of your application in Datadog
    version: "1.0.0",
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackFrustrations: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
  });

  datadogRum.startSessionReplayRecording();
});
