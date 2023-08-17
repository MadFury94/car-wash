<template>
  <div class="">
    <div class="p-20">
      <h1 class="text-4xl font-bold mb-4 text-center">Under Construction</h1>
      <p class="text-gray-600 text-center">
        We are updating our Web Application to give you something awseom
      </p>

      <PackagesSection
        menuStyle="grid grid-cols-1"
        :package-data="packageData"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PackagesSection from "./sections/PackagesSection.vue";

definePageMeta({
  layout: "coming-soon",
  name: "comingSoon",
  title: "Coming Soon",
  description: "This is the details about company",
  image:
    "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/09/blog_3.jpg",
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
    ],
  },
];
</script>

<style scoped></style>
