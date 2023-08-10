<template>
  <div class="flex gap-x-6 items-center">
    <NuxtLink :to="{ name: link }" class="btn">{{ title }}  <i v-if="icon" :class="icon"></i></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Click",
    required: true,
  },
  link: {
    type: String,
    default: "index",
    required: false,
  },

  icon: {
    type: String,
    default: "fas fa-plus",
    required: false,
  },
});
</script>
