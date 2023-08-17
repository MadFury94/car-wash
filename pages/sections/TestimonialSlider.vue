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
    name: "John Doe",
    position: "Taxi Driver",
    image: "fa-solid fa-car",
    description:
      "Sprynx Multi transformed my taxi. The shine and detail work were impeccable. I've never felt so proud driving my cab around!",
    star: "5",
  },

  {
    name: "Sarah White",
    position: "Car Enthusiast",
    image: "fa-solid fa-car-side",
    description:
      "Been to many car detailing services, but nothing matches the precision and care of Sprynx Multi. Truly top-notch.",
    star: "5",
  },

  {
    name: "Michael Green",
    position: "Executive",
    image: "fa-solid fa-sedan",
    description:
      "A busy schedule means little time for car care. Sprynx Multi's swift and efficient service makes my sedan look brand new in no time.",
    star: "5",
  },

  {
    name: "Amanda Smith",
    position: "Realtor",
    image: "fa-solid fa-car",
    description:
      "First impressions matter in my line of work. Thanks to Sprynx Multi, my car always looks its best for my clients.",
    star: "5",
  },

  {
    name: "Daniel Brown",
    position: "Car Racer",
    image: "fa-solid fa-sports-car",
    description:
      "Detailing perfection! After a race, Sprynx Multi is my go-to for getting my sports car back in pristine condition.",
    star: "5",
  },

  {
    name: "Lisa Johnson",
    position: "Architect",
    image: "fa-solid fa-convertible",
    description:
      "Sprynx Multi has an eye for detail that matches an architect's precision. My convertible has never looked better!",
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
