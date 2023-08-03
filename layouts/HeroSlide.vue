<template>
  <div>
    <Splide :has-track="false" :options="options" aria-label="My Slide">
      <SplideTrack>
        <SplideSlide v-for="(item, index) in sliders" :key="index">
          <div>
            <div class="relative h-[600px] isolate overflow-hidden pt-14">
              <div class="absolute inset-0 bg-black opacity-50"></div>

              <img
                :src="item.image"
                alt=""
                class="h-[600px] object-cover absolute inset-0 -z-10 w-full"
              />

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

type Sliders = {
  heading: string;
  image: string;
  description: string;
};
const sliders = ref<Sliders[]>([
  {
    heading: "Premium Exterior Wash",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691081374/beautiful-car-washing-service_yeptnx.jpg",
    description:
      "A thorough wash with high-quality cleaning agents to leave your car's exterior shining and free from dirt and grime.",
  },
  {
    heading: "Interior Detailing Service",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691081374/beautiful-car-washing-service_yeptnx.jpg",
    description:
      "Our experts vacuum and polish your car's interior surfaces to keep them looking and feeling fresh.",
  },
  {
    heading: "Complete Car Care Package",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691081374/beautiful-car-washing-service_yeptnx.jpg",
    description:
      "A thorough wash with high-quality cleaning agents to leave your car's exterior shining and free from dirt and grime.",
  },
]);
const options = {
  rewind: true,
  gap: "0rem",
  type: "loop",
  pagination: true,
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
