<template>
  <div>
    <Splide :has-track="false" :options="options" aria-label="My Slide">
      <SplideTrack>
        <SplideSlide v-for="(item, index) in sliders" :key="index">
          <div class="mx-auto">
            <div class="relative h-[700px] isolate overflow-hidden mb-8 px-2">
              <div class="absolute inset-0 bg-black opacity-50"></div>

              <img
                :src="item.image"
                alt=""
                class="h-[700px] object-cover absolute inset-0 -z-10 w-full"
              />

              <div class="mx-auto py-32 sm:py-48 lg:py-40 lg:px-80 px-10">
                <div class="hidden sm:mb-8 sm:flex"></div>
                <div class="lg:text-start">
                  <h1
                    class="text-base my-2 font-semibold leading-6 text-secondary-500 ring-1 ring-inset ring-indigo-600/10 relative z-10"
                  >
                    {{ item.heading }}
                  </h1>
                  <div class="text-5xl">
                    <h1
                      class="font-semibold w-80 lg:w-full tracking-tight text-4xl text-white relative z-10 my-2"
                    >
                      {{ item.heading2 }}
                    </h1>
                    <h1
                      class="lg:text-8xl font-semibold tracking-tight sm:text-xl md:text-xl text-white relative z-10 my-2"
                    >
                      {{ item.heading3 }}
                    </h1>
                  </div>
                  <p
                    class="mt-6 text-lg leading-8 w-80 lg:w-full py-4 text-gray-300 relative z-10"
                  >
                    {{ item.description }}
                  </p>
                  <div class="flex gap-x-6 relative z-10">
                    <ButtonComponent :title="item.button" link="index" />
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
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { ref } from "vue";

// or other themes
import "@splidejs/splide/css/skyblue";

import "@splidejs/vue-splide/css/core";
import ButtonComponent from "~/components/ButtonComponent.vue";

type Sliders = {
  heading: string;
  heading2: string;
  heading3: string;
  button: string;

  image: string;
  description: string;
};
const sliders = ref<Sliders[]>([
  {
    heading: "CAR CARE",
    heading2: "It's time to Come ",
    heading3: " Clean your Car",
    button: "Discover more",
    image: "./images/car-1.jpg",
    description:
      "Professional Car Wash Center to help you to get clean vehicle!",
  },
  {
    heading: "QUICK AND EASY ",
    heading2: "Interior",
    heading3: " Detailing Service",
    button: "Discover more",

    image: "/images/car-2.jpg",
    description:
      "Our experts vacuum and polish your car's interior surfaces to keep them looking and feeling fresh.",
  },
  {
    heading: "PROFESSIONAL AUTO-CARE ",
    heading2: "Complete Car",
    heading3: " Care Package",
    button: "Discover more",

    image: "./images/car-3.jpg",
    description:
      "A thorough wash with high-quality cleaning agents to leave your car's exterior shining and free from dirt and grime.",
  },
]);
const options = {
  rewind: true,
  gap: "0rem",
  type: "loop",
  pagination: false,
  arrows: true,
  perPage: 1,
  breakpoints: {
    1200: { perPage: 1, gap: 0, arrows: true },
    640: { perPage: 1, gap: 0, arrows: false },
  },

  autoplay: true,
};
</script>

<style>
.myImage {
  height: 900px;
  width: 100%;
}
</style>
