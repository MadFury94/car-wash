<template>
  <div class="">
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from './Footer.vue';
import Header from './Header.vue';


</script>

<style scoped></style>
