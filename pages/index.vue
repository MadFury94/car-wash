<template>
  <div>
    <HeroSlide />
    <HoverButtons />
    <AboutSection />
    <ServiceSection />
    <!-- <ServiceModule /> -->
    <ServiceSlider />
    <CountUpSection/>
  </div>
</template>

<script setup lang="ts">
import AboutSection from "~/layouts/sections/AboutSection.vue";
import CountUpSection from "~/layouts/sections/CountUpSection.vue";
import HoverButtons from "~/layouts/sections/FeaturesArea.vue";
import HeroSlide from "~/layouts/sections/HomeHeroSlider.vue";
import ServiceSection from "~/layouts/sections/ServiceSection.vue";
import ServiceSlider from "~/layouts/sections/ServiceSlider.vue";
</script>
