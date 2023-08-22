<template>
  <div>
    <!-- you will need to handle a loading state -->
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-for="item in data">
        <!-- do something -->
        {{ item.name }}
      </div>
    </div>
    <PackagesSection />
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
</script>

<style scoped></style>
