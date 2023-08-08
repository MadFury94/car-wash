<template>
  <div>
    <HeroSlide />
    <HoverButtons />
    <AboutSection />
    <ServiceSection />
    <!-- <ServiceModule /> -->
    <ServiceSlider />


    <!-- <NumberCounter /> -->
    <CountUpSection />
    <SectionWithTabs/>

  </div>
</template>

<script setup lang="ts">
import AboutSection from "~/pages/sections/AboutSection.vue";
import CountUpSection from "~/pages/sections/CountUpSection.vue";
import HoverButtons from "~/pages/sections/FeaturesArea.vue";
import HeroSlide from "~/pages/sections/HomeHeroSlider.vue";
import SectionWithTabs from "~/pages/sections/SectionWithTabs.vue";
import ServiceSection from "~/pages/sections/ServiceSection.vue";
import ServiceSlider from "~/pages/sections/ServiceSlider.vue";


definePageMeta({
  layout: "default",
  name: "index",
});

</script>
