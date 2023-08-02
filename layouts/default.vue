<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div>
    <Header />
    <div class="h-screen mt-20">
      <slot />
    </div>
    <Footer />
  </div>
</template>
