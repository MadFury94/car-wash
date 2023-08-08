<template>
  <div class="mt-0 flex gap-x-6 relative z-10">
    <a :href="link" class="btn">{{ text }}</a>
    <i :class="icon"></i>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "Click",
    required: true,
  },
  link: {
    type: String,
    default: "Click",
    required: true,
  },

  icon: {
    type: String,
    default: "fas fa-plus",
    required: false,
  },
});
</script>
