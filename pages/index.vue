<template>
  <div>
    <HeroSlide />
    <HoverButtons />
    <AboutSection />
    <ServiceSection />
    <!-- <ServiceModule /> -->
    <ServiceSlider />
  </div>
</template>

<script setup lang="ts">
import HeroSlide from "~/layouts/sections/HomeHeroSlider.vue";
import HoverButtons from "~/layouts/sections/FeaturesArea.vue";
import AboutSection from "~/layouts/sections/AboutSection.vue";
import ServiceSection from "~/layouts/sections/ServiceSection.vue";
import ServiceModule from "~/layouts/sections/ServiceModule.vue";
import ServiceSlider from "~/layouts/sections/ServiceSlider.vue";
</script>
