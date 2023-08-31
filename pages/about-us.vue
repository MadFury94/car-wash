<template>
  <div>
    <AboutHero />
    <PackagesSection :package-data="packageData" />

    <AboutFeatures />
    <OurTeam />

    <TestimonialSlider />
  </div>
</template>

<script setup lang="ts">
import { package_detail_data } from "../store/data";
import AboutFeatures from "./sections/AboutFeatures.vue";
import AboutHero from "./sections/AboutHero.vue";
import OurTeam from "./sections/OurTeam.vue";
import PackagesSection from "./sections/PackagesSection.vue";
import TestimonialSlider from "./sections/TestimonialSlider.vue";

definePageMeta({
  layout: "general-layout",
  name: "aboutPage",
  title: "About Us",
});

const { pending, data: posts } = useFetch("http://localhost:3000/packages", {
  lazy: true,
});

const packageData = package_detail_data;
</script>

<style scoped></style>
