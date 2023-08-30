<template>
  <div>
    <AdminFlexLayout>
      <NuxtPage />
    </AdminFlexLayout>
    <client-only>
              <debug :data="{  }" />
            </client-only>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
