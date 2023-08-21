<template>
  <div>
    <div class="bg-red-500">
      <div class="flex gap-x-4">
        <div>Create Package</div>
        <NuxtLink :to="{ name: 'all-packages' }">All Packages</NuxtLink>
        <NuxtLink :to="{ name: 'new-feature' }">Create features</NuxtLink>
        <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
