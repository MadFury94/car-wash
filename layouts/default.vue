<script setup>
import Footer from "../components/commons/Footer.vue";
import Header from "../components/commons/Header.vue";

const $router = useRouter();
</script>

<template>
  <div>
    <Header />
    <div>
      <slot />
    </div>
    <client-only>
      <debug :data="{}" />
    </client-only>
    <Footer />
  </div>
</template>
