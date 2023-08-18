<template>
  <div class="">
    <div class="p-20">
      <h1 class="text-4xl font-bold mb-4 text-center">Under Construction</h1>
      <p class="text-gray-600 text-center">
        We are updating our Web Application to give you something awseom
      </p>

      <PackagesSection
        :package-data="packageData"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { package_detail_data } from "../store/data";
import PackagesSection from "./sections/PackagesSection.vue";

definePageMeta({
  layout: "coming-soon",
  name: "comingSoon",
  title: "Coming Soon",
  description: "This is the details about company",
  image:
    "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/09/blog_3.jpg",
});

const packageData = package_detail_data
</script>

<style scoped></style>
