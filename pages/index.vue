<template>
  <div>
    <HeroSlide />
    <FeaturesArea />
    <AboutSection />
    <ServiceSection />
    <!-- <ServiceModule /> -->
    <ServiceSlider />

    <!-- <NumberCounter /> -->
    <div>
      <CountUpSection />
      <SectionWithTabs />
      <PackagesSection :package-data="packageData" />
      <NewpackageSection :package-data="packageData" />
      <div v-if="pending">Loading ...</div>
      <div v-else>
        <div v-for="post in posts">
          {{ post }}
          <!-- do something -->
        </div>
      </div>

      <HowItWork />
      <FaqSection />
      <TestimonialSlider />
      <client-only>
        <debug
          :data="{
            counter: {
              name: 'counter',
            },
          }"
          use-parent-name
        ></debug>
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutSection from "../pages/sections/AboutSection.vue";
import CountUpSection from "../pages/sections/CountUpSection.vue";
import FeaturesArea from "../pages/sections/FeaturesArea.vue";
import HeroSlide from "../pages/sections/HomeHeroSlider.vue";
import SectionWithTabs from "../pages/sections/SectionTabs.vue";
import ServiceSlider from "../pages/sections/ServiceSlider.vue";
import ServiceSection from "../pages/sections/service-section";
import FaqSection from "./sections/FaqSection.vue";
import HowItWork from "./sections/HowItWork.vue";
import PackagesSection from "./sections/PackagesSection.vue";
import TestimonialSlider from "./sections/TestimonialSlider.vue";

import { package_detail_data } from "../store/data";
import NewpackageSection from "./sections/NewpackageSection.vue";

definePageMeta({
  // layout: "default",
  layout: "default",
  name: "index",
});

const { pending, data: posts } = useFetch("http://localhost:3000/packages", {
  lazy: true,
});

const packageData = package_detail_data;
</script>
