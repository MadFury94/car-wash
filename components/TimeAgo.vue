<template>
  <div >{{ value }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
