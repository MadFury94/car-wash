<template>
  <div>
    <PackagesSection :package-data="tiers" />
  </div>
</template>

<script setup lang="ts">
import PackagesSection from "./sections/PackagesSection.vue";

definePageMeta({
  layout: "pages-layout",
  name: "packagePage",
  title: "our Company Packages ",
  description: "This is the package page of our company",
});

const tiers = [
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
        price: "85,000",
        description: "The essentials to provide your best work for clients.",
        features: ["INTERIOR", "EXTERIOR", "PAINT"],

        mostPopular: false,
      },

      {
        name: "DIAMOND PACKAGE",
        id: "tier-startup",
        href: "#",
        price: "60",
        description: "A plan that scales with your rapidly growing business.",
        features: ["INTERIOR", "EXTERIOR", "ENGINE"],

        mostPopular: true,
      },
      {
        name: "SILVER PACKAGE",
        id: "tier-startup",
        href: "#",
        price: "₦60",
        description: "A plan that scales with your rapidly growing business.",
        features: ["INTERIOR", "EXTERIOR", "PAINT"],

        mostPopular: false,
      },
      {
        name: "BRONZE PACKAGE",
        id: "tier-startup",
        href: "#",
        price: "60",
        description: "A plan that scales with your rapidly growing business.",
        features: ["INTERIOR", "EXTERIOR"],

        mostPopular: false,
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
        price: "15",
        description: "The essentials to provide your best work for clients.",
        features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
        mostPopular: false,
      },
      {
        name: "Mid  Supreme Wash",
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
        name: "mid Utra Fullservice",
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
  },

  {
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
  },
];
</script>

<style scoped></style>
