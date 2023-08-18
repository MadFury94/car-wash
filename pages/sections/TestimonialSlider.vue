<template>
  <div>
    <Splide
      :has-track="false"
      :options="options"
      aria-label="My Favorite Images"
      class=""
    >
      <SplideTrack>
        <SplideSlide v-for="(item, index) in testimonials" :key="index">
          <TestimonyCard
            :name="item.name"
            :position="item.position"
            :image="item.image"
            :description="item.description"
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
      <div class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>
    </Splide>
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";

import "@splidejs/vue-splide/css/core";
import TestimonyCard from "./TestimonyCard.vue";

const testimonials = [
  {
    name: "Chijioke Okafor",
    position: "Uber Driver",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346124/handsome-elegant-man-car-salon_numphc.jpg",
    description:
      "Every day in Lagos, my taxi is exposed to so much dirt. But with Sprynx Multi, it gets a remarkable transformation. My passengers can't help but admire the shine!",
    star: "5",
  },

  {
    name: "Aisha Bello",
    position: "Businesswoman",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346124/medium-shot-senior-black-woman-outdoors_xvk2yu.jpg",
    description:
      "In a bustling city like Lagos, finding a top-notch detailing service can be a challenge. Sprynx Multi truly stands out; they give my car the special touch it deserves.",
    star: "5",
  },

  {
    name: "Emeka Nwosu",
    position: "Banker",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346124/handsome-elegant-man-car-salon_numphc.jpg",
    description:
      "With my busy work routine, Sprynx Multi's efficiency is a lifesaver. They make my car look brand new and it feels like I've just driven it off the showroom floor.",
    star: "5",
  },

  {
    name: "Funke Adebayo",
    position: "Estate Agent",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346124/portrait-young-woman-with-afro-dreadlocks-posing-with-car_wosirx.jpg",
    description:
      "As an estate agent, first impressions are crucial. Thanks to Sprynx Multi, my car always enhances my professional image with clients.",
    star: "5",
  },

  {
    name: "Tunde Lawal",
    position: "Event Planner",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346124/medium-shot-smiley-man-sitting-car_uajuom.jpg",
    description:
      "After every big owambe, my car can look a real mess. But once Sprynx Multi get hold of it, e dey come out looking clean and super shiny! Dem really know their work.",
    star: "5",
  },

  {
    name: "Chioma Adeleke",
    position: "Fashion Designer",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346338/medium-shot-woman-posing-car_slvvrg.jpg",
    description:
      "In the fashion industry, presentation is everything. Thanks to Sprynx Multi, my convertible always looks its best and suits my chic style.",
    star: "5",
  },
];
const options = {
  rewind: true,
  gap: "3rem",
  type: "loop",
  pagination: true,
  arrows: true,
  perPage: 1,
  breakpoints: {
    1200: { perPage: 1, gap: "1rem", arrows: true },
    640: { perPage: 1, gap: 0, arrows: false },
  },

  autoplay: true,
};
</script>

<style scoped>
.splide__progress__bar {
  height: 3px;
  @apply bg-primary-200;
}
</style>
