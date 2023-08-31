<template>
  <div>
    <h1>User Dashboard</h1>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "user-layout",
  name: "user-index",
  middleware: ["auth"],

})
</script>

<style scoped></style>
