import Toast, { PluginOptions } from "vue-toastification";
export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  const options: PluginOptions = {
    // You can set your default options here
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true,
  };

  app.use(Toast, options);
});
