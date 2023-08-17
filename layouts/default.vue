<script setup>
import Footer from "../components/commons/Footer.vue";
import Header from "../components/commons/Header.vue";

const  $router = useRouter()

onMounted(() => {
  console.log('mounted')

  $router.push({name:"comingSoon"})
})


</script>

<template>
  <div class="">
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>



