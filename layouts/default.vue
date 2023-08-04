<script setup>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>

<template>
  <div class="mx-auto px-2">
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
