<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    required: false,
    default: "Not Found",
  },
});
</script>

<style scoped></style>
