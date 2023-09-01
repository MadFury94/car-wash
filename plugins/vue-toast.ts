import Toast, { PluginOptions } from "vue-toastification";
export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  const options: PluginOptions = {
    // You can set your default options here
  };

  app.use(Toast, options);

  console.log("Toast", Toast);

  /*   useDebugPlugin(app, {
    registerDebugComponent: true,
    components: {
      after: { RouterInfo, ScreenSize },
    },
  }); */
});
