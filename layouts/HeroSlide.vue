<template>
  <div>
    <Splide :has-track="false" :options="options" aria-label="My Slide">
      <SplideTrack>
        <SplideSlide v-for="(item, index) in sliders" :key="index">
          <div>
            <div class="relative isolate overflow-hidden pt-14">
              <div class="absolute inset-0 bg-black opacity-50"></div>

              <img
                :src="item.image"
                alt=""
                class="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div
                class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style="
                    clip-path: polygon(
                      74.1% 44.1%,
                      100% 61.6%,
                      97.5% 26.9%,
                      85.5% 0.1%,
                      80.7% 2%,
                      72.5% 32.5%,
                      60.2% 62.4%,
                      52.4% 68.1%,
                      47.5% 58.3%,
                      45.2% 34.5%,
                      27.5% 76.7%,
                      0.1% 64.9%,
                      17.9% 100%,
                      27.6% 76.8%,
                      76.1% 97.7%,
                      74.1% 44.1%
                    );
                  "
                />
              </div>
              <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                <div class="text-center">
                  <h1
                    class="text-4xl font-bold tracking-tight text-white sm:text-6xl relative z-10"
                  >
                    {{ item.heading }}
                  </h1>
                  <p class="mt-6 text-lg leading-8 text-gray-300 relative z-10">
                    {{ item.description }}
                  </p>
                  <div
                    class="mt-10 flex items-center justify-center gap-x-6 relative z-10"
                  >
                    <a href="#" class="btn">Get started</a>
                    <a href="#" class="btn2"
                      >Learn more <span aria-hidden="true">→</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </SplideTrack>
      <button class="splide__toggle" type="button">
        <span class="splide__toggle__play"
          ><i class="fa-sharp fa-solid fa-play"></i
        ></span>
        <span class="splide__toggle__pause"
          ><i class="fa-sharp fa-solid fa-pause"></i
        ></span>
      </button>
    </Splide>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";

import "@splidejs/vue-splide/css/core";

type Sliders = {
  heading: string;
  image: string;
  description: string;
};
const sliders = ref<Sliders[]>([
  {
    heading: "Premium Exterior Wash",
    image: "https://images.pexels.com/photos/247695/pexels-photo-247695.jpeg",
    description:
      "A thorough wash with high-quality cleaning agents to leave your car's exterior shining and free from dirt and grime.",
  },
  {
    heading: "Interior Detailing Service",
    image: "https://www.sprynxmulti.com/wp-content/uploads/2020/04/car1.jpg",
    description:
      "Our experts vacuum and polish your car's interior surfaces to keep them looking and feeling fresh.",
  },
  {
    heading: "Complete Car Care Package",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
    description:
      "Our comprehensive service combines our exterior wash and interior detailing for the ultimate car care experience.",
  },
]);
const options = {
  rewind: true,
  gap: "3rem",
  type: "loop",
  pagination: true,
  arrows: true,
  perPage: 1,
  breakpoints: {
    1200: { perPage: 2, gap: "1rem", arrows: true },
    640: { perPage: 1, gap: 0, arrows: false },
  },

  autoplay: true,
};
</script>
