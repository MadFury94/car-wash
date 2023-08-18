<template>
  <div class="container mx-auto">
    <Splide :has-track="false" :options="options" aria-label="My Slide">
      <SplideTrack>
        <SplideSlide v-for="(item, index) in sliders" :key="index">
          <PackagesSection :package-data="packageData" />
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
import PackagesSection from "./PackagesSection.vue";
import { package_detail_data } from "~/store/data";

const { pending, data: posts } = useFetch("http://localhost:3000/packages", {
  lazy: true,
});

const packageData = package_detail_data;
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
    description:
      "For those in a hurry. Get a rapid, efficient exterior wash that leaves your car gleaming without the wait.",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
  {
    heading: "Auto Detailing Service",
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/02-Auto-Detailing.jpg",
    description:
      "Delve deeper than the surface. Comprehensive cleaning, waxing, and polishing to make every detail of your car stand out.",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
  {
    heading: "Complete Car Package",
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/04-Complete-Detail-Wash.jpg",
    description:
      "The ultimate pampering for your car. Exterior, interior, undercarriage – every part gets our utmost attention.",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
  {
    heading: "Oil Changing",
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/05-Oil-Changing.jpg",
    description:
      "Enhance your car's longevity and performance. We offer a premium oil change to ensure a smooth ride.",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
]);

const options = {
  rewind: true,
  gap: "2rem",
  type: "loop",
  pagination: true,
  arrows: true,
  perPage: 1,
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
