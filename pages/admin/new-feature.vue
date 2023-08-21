<template>
  <div>
    <h1>new feature</h1>

    <div class="form">
      <label>Title</label>
      <input v-model="form.name" type="text" class="border" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "new-feature",
  layout: "admin-layout",
});

const form = ref({
  name: "INTERIOR DETAILING",
  list: [
    "Vacuum",
    "Trunk",
    "Stain Removal",
    "Leather/Fabric Cleaning & Conditioning",
    "Mat/Rugs Shampooing",
    "Vinyl/Plastic Restoration",
    "Door Jambs",
    "Dashboard",
    "Roof",
    "AC Vents Flushing & Steaming",
    "Cockpits.",
  ],
});
</script>

<style scoped></style>
