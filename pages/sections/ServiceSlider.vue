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
  {
    heading: "Car Waxing",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691167695/01-Express-Exterior_pus9y2.jpg",
    description:
      "Car wax smoothes the paint surface and will reduce the friction between debris and your car, meaning that tiny debris is more likely to slide off your car rather than damage it.",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
  {
    heading: "Car Polishing",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1693727213/auto-service-salon-doign-car-wrapping_jjbvtp.jpg",
    description:
      "Car polish is a product that helps to eliminate surface scratches, swirls, oxidation, dirt, and other minor imperfections. Polish should be used before wax, as it helps to restore auto paint that has lost its shine due to oxidation.",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
  {
    heading: "Headlight Restoration",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1693727346/car-being-taking-care-workshop_3_h68kix.jpg",
    description:
      "Headlight restoration or plastic headlight restoration is the act of refinishing aged headlight lenses that have become discolored or dull due to oxidation primarily due to UV light and other environmental factors such as road debris impact rain, and exposure to caustic chemicals.",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
  {
    heading: "Engine Cleaning",
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/06-Preventative-Services.jpg",
    description:
      "A clean engine makes a used car look newer and better maintained. Some shops that perform engine cleaning services claim a clean engine even runs a little cooler because removing the gunk formed by dirt, oil and grease allows engines to run cooler.",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
  },
  {
    heading: "Car Detailing",
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/02-Auto-Detailing.jpg",
    description:
      "Car detailing involves cleaning and reconditioning the interior and exterior of the car. The aim of this is to restore the paintwork by eliminating scratches or swirl marks to make the car look almost brand new like it did when you first drove it out of the shop.",
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
    800: { perPage: 2, gap: "2rem", arrows: true },
    1600: { perPage: 2, gap: "2rem", arrows: true },
    1000: { perPage: 2, gap: "2rem", arrows: true },
    640: { perPage: 1, gap: "2rem", arrows: false },
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
