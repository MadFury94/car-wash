<template>
  <div>
    <h1>Admin areas</h1>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "admin-layout",
  name: "admin-index",
  title: "Admin",
  description: "This is the admin page of our company",
  middleware: "auth",

});


</script>

<style scoped></style>
