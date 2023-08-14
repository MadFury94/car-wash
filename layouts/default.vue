<script setup>
import Header from "../components/commons/Header.vue";
import Footer from "./Footer.vue";
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
