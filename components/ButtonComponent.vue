<template>
  <div class="flex gap-x-6">
    <NuxtLink :to="{ name: link }" class="btn">{{ title }}</NuxtLink>
    <i v-if="icon" :class="icon"></i>
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
    required: true,
  },

  icon: {
    type: String,
    default: "fas fa-plus",
    required: false,
  },
});
</script>
