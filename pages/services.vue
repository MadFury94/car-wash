<template>
  <div>
    <div class="text-center p-10">
      <PillInfo class="mb-4" title="WE CARE YOUR CAR" />
      <h1 class="heading mb-2">Services We Provide</h1>
      <p class="mb-6">
        We have over 20 years of experience providing carwash & detail services
        for both Commercial and individuals without compromise quality.
      </p>
      <ServiceSlider />
    </div>
    <div class="lg:px-44">
      <div
        class="bg-primary-500 grid lg:grid-cols-5 rounded-lg p-10 grid-cols-1"
      >
        <div
          class="text-secondary-500 col-span-1 text-7xl grid place-content-center"
        >
          <i class="fa-thin fa-comment-question"></i>
        </div>
        <div class="col-span-3">
          <h1
            class="text-white lg:text-left text-center text-3xl w-full my-4 font-semibold"
          >
            Do you need help with your vehicle?
          </h1>
          <p class="text-gray-300 py-2 lg:text-left text-center">
            Send us a message, or phone 1-800 234 567 bbetween 09:00 and 180:00
            Mon-Sat
          </p>
        </div>
        <div class="grid place-content-center col-span-1 mt-4">
          <button class="btn3">Request a Call Back</button>
        </div>
      </div>
    </div>
    <SectionWithTabs />
    <div class="text-center p-10">
      <PillInfo title="WHY CHOOSE US" />
      <h1 class="heading mt-8">
        What advantages will you get when washing your car?
      </h1>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-10 space-y-4">
        <div
          v-for="(item, index) in services"
          :key="index"
          class="flex gap-x-2 mt-2"
        >
          <div class="">
            <i
              class="text-3xl text-secondary-400 rounded-full"
              :class="item.icon"
            ></i>
          </div>

          <div class="text-start">
            <h1 class="heading">{{ item.title }}</h1>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <TestimonialSliderVue />
  </div>
</template>

<script setup lang="ts">
import ServiceSlider from "./sections/ServiceSlider.vue";
import SectionWithTabs from "../pages/sections/SectionTabs.vue";
import TestimonialSliderVue from "./sections/TestimonialSlider.vue";

definePageMeta({
  layout: "general-layout",
  name: "services",
  title: "Services",
  description: "Home > Services",
  image:
    "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691189595/03-Full-Service-Wash_thctmt.jpg",
});

const services = [
  {
    title: "Enhanced Appearance",
    description:
      "Regular car washes keep your vehicle looking shiny and new, preserving its finish.",
    icon: "fa fa-car",
  },
  {
    title: "Preserves Paint",
    description:
      "Removing dirt, salt, and grime prevents them from sticking and eroding the car's paint and finish.",
    icon: "fa fa-paint-brush",
  },
  {
    title: "Increased Safety",
    description:
      "Clean windows and mirrors improve visibility, reducing the risk of accidents on the road.",
    icon: "fa fa-eye",
  },
  {
    title: "Prevents Rust",
    description:
      "By cleaning off contaminants that can cause rust, you protect the undercarriage and extend the life of your car.",
    icon: "fa fa-shield-alt",
  },
  {
    title: "Improved Fuel Efficiency",
    description:
      "A clean car has reduced drag, making it more aerodynamic and fuel-efficient.",
    icon: "fa fa-gas-pump",
  },
  {
    title: "Higher Resale Value",
    description:
      "A well-maintained and clean vehicle can significantly increase its resale value.",
    icon: "fa fa-dollar-sign",
  },
];
</script>

<style scoped></style>
