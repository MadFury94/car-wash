// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: { name: "layout", mode: "out-in" },
    head:{
      link:[
        {
        rel: "stylesheet",
        href:"/assets/fa/css/all.min.css"

      },

      {
        rel:"stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
      }
    
    ]
    }
  },

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
});
