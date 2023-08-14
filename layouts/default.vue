<script setup>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>

<template>
  <div class="">
    <Header v-if="false" />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
