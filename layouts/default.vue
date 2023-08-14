<script setup>
import Footer from "../components/commons/Footer.vue";
import Header from "../components/commons/Header.vue";
</script>

<template>
  <div class="">
    <Header  />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
