// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    "~/assets/css/main.css",
    "vue-json-debug/src/debug.css",
    "~/assets/css/form.scss",
  ],

  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "/assets/fa/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        },  

        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap",
        },
      ],
    },
  },

  plugins: [
    {
      src: "@/plugins/extend-vue.ts",
      mode: "client",
    },
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [],

  devtools: {
    enabled: true,
  },
  /**
   * Build Configuration.
   */
  build: {
    transpile: [
      // Transpile @trapcode/browser-storage for IE11 support
      "@trapcode/browser-storage",
    ],
  },
  hooks: {
    "vite:extendConfig": (config, { isClient }) => {
      if (isClient)
        // @ts-ignore
        config.resolve.alias.vue = "vue/dist/vue.esm-bundler.js";
    },
  },
});
