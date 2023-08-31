<template>
  <div>
    <UserFlexLayout>
      <NuxtPage />
    </UserFlexLayout>
    <client-only>
      <debug :data="{  }" />
    </client-only>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
