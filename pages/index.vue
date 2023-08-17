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

definePageMeta({
  // layout: "default",
  layout: "default",
  name: "index",
});

const { pending, data: posts } = useFetch("http://localhost:3000/packages", {
  lazy: true,
});

const packageData = [
  {
    title: "Small Size Car",
    value: "small-size-car",
    packages: [
      {
        name: "PREMIUM DETAILING",
        id: "tier-freelancer",
        href: "#",
        price: "85,000",
        description: "The essentials to provide your best work for clients.",
        features: ["INTERIOR", "EXTERIOR", "PAINT", "ENGINE"],
        mostPopular: false,
      },
      {
        name: "Gold Package",
        id: "tier-hobby",
        href: "#",
        price: "75,000",
        description: "The essentials to provide your best work for clients.",
        features: ["INTERIOR", "EXTERIOR", "PAINT"],
        mostPopular: false,
      },

      {
        name: "DIAMOND PACKAGE",
        id: "tier-startup",
        href: "#",
        price: "47,000",
        description: "A plan that scales with your rapidly growing business.",

        mostPopular: true,
      },
    ],
  },
  {
    title: "Mid Size Car",
    value: "mid-size-car",
    packages: [
      {
        name: "Mid -Express Wash",
        id: "tier-hobby",
        href: "#",
        price: "95,000 ",
        description: "The essentials to provide your best work for clients.",
        features: ["INTERIOR", "EXTERIOR", "PAINT", "ENGINE"],
        mostPopular: false,
      },
      {
        name: "Mid  Supreme Wash",
        id: "tier-freelancer",
        href: "#",
        price: "85,000",
        description: "The essentials to provide your best work for clients.",
        features: ["INTERIOR", "EXTERIOR", "PAINT"],
        mostPopular: false,
      },
      {
        name: "mid Utra Full service",
        id: "tier-startup",
        href: "#",
        price: "50,500",
        description: "A plan that scales with your rapidly growing business.",
        features: ["INTERIOR", "EXTERIOR", "ENGINE"],
        mostPopular: true,
      },
    ],
  },

/*   {
    title: "Full Size Car",
    value: "full-size-car",
    packages: [
      {
        name: "full-- Hobby999",
        id: "tier-hobby",
        href: "#",
        price: "15",
        description: "The essentials to provide your best work for clients.",
        features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
        mostPopular: false,
      },
      {
        name: "Full --- Freelancer",
        id: "tier-freelancer",
        href: "#",
        price: "30",
        description: "The essentials to provide your best work for clients.",
        features: [
          "5 products",
          "Up to 1,000 subscribers",
          "Basic analytics",
          "48-hour support response time",
        ],
        mostPopular: false,
      },
      {
        name: "full ---Startup",
        id: "tier-startup",
        href: "#",
        price: "60",
        description: "A plan that scales with your rapidly growing business.",
        features: [
          "25 products",
          "Up to 10,000 subscribers",
          "Advanced analytics",
          "24-hour support response time",
          "Marketing automations",
        ],
        mostPopular: true,
      },
    ],
  }, */
];
</script>
