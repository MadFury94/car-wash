<template>
  <div>
    <PackagesSection />
  </div>
</template>

<script setup lang="ts">
import PackagesSection from "./sections/PackagesSection.vue";

definePageMeta({
  layout: "general-layout",
  name: "public.packages",
  title: "our Company Packages ",
  description: "This is the package page of our company",
});
</script>

<style scoped></style>
