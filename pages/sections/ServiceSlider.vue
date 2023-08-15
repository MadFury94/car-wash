<template>
  <div class="container mx-auto">
    <Splide :has-track="false" :options="options" aria-label="My Slide">
      <SplideTrack>
        <SplideSlide v-for="(item, index) in sliders" :key="index">
          <ServiceModule
            :image="item.image"
            :description="item.description"
            :title="item.heading"
            :icon="item.icon"
          />
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
import ServiceModule from "./ServiceModule.vue";

type Sliders = {
  heading: string;
  image: string;
  description: string;
  icon: string;
};
const sliders = ref<Sliders[]>([
  {
    heading: "Express Exterior",
    image:
      "https://res.cloudinary.com/duxvgqgfl/image/upload/v1691317598/01-Express-Exterior_puuahm.jpg",
    description: "A thorough wash with high-quality cleaning",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
  {
    heading: "Auto Detailing Service",
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/02-Auto-Detailing.jpg",
    description: "Our experts vacuum and polish your car",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
  {
    heading: "Complete Car Package",
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/04-Complete-Detail-Wash.jpg",
    description: "A thorough wash with high-quality cleaning ",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
  {
    heading: "Oil Changing",
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/05-Oil-Changing.jpg",
    description: "A thorough wash with high-quality cleaning agents ",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
]);
const options = {
  rewind: true,
  gap: "2rem",
  type: "loop",
  pagination: true,
  arrows: true,
  perPage: 3,
  breakpoints: {
    /*    800: { perPage: 2, gap: "2rem", arrows: true },
    1600: { perPage: 2, gap: "2rem", arrows: true },
    1000: { perPage: 2, gap: "2rem", arrows: true },
    640: { perPage: 1, gap: "2rem", arrows: false }, */
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
