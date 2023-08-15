<template>
  <div>
    <AboutHero />
    <AboutFeatures />
    <OurTeam />

    <TestimonialSlider />
  </div>
</template>

<script setup lang="ts">
import AboutFeatures from "./sections/AboutFeatures.vue";
import AboutHero from "./sections/AboutHero.vue";
import OurTeam from "./sections/OurTeam.vue";
import TestimonialSlider from "./sections/TestimonialSlider.vue";

definePageMeta({
  layout: "pages-layout",
  name: "aboutPage",
  title: "About Us",
});
</script>

<style scoped></style>
