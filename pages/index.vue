<template>
  <div>
    <HeroSlide />
    <HoverButtons />
    <AboutSection />
  </div>
</template>

<script setup lang="ts">
import HeroSlide from "~/layouts/sections/HomeHeroSlider.vue";
import HoverButtons from "~/layouts/sections/FeaturesArea.vue";
import AboutSection from "../layouts/sections/AboutSection.vue";
</script>
