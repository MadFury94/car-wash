import RouterInfo from "vue-json-debug/src/docks/RouterInfo.vue";
import ScreenSize from "vue-json-debug/src/docks/ScreenSize.vue";
import { useDebugPlugin } from "vue-json-debug/src/plugin";

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  useDebugPlugin(app, {
    registerDebugComponent: true,
    components: {
      after: { RouterInfo, ScreenSize },
    },
  });
});
