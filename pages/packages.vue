<template>
  <div>
    <PackagesSection :package-data="packageData" />
  </div>
</template>

<script setup lang="ts">
import { package_detail_data } from "../store/data";
import PackagesSection from "./sections/PackagesSection.vue";

definePageMeta({
  layout: "pages-layout",
  name: "packagePage",
  title: "our Company Packages ",
  description: "This is the package page of our company",
});



const packageData = package_detail_data;
</script>

<style scoped></style>
