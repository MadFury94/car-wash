<template>
  <div class="">
    <Header />

    <!-- ovverlay arae -->
    <div
      class="rounded-lg relative h-52"
      :style="{
        'background-image': `url(${$route.meta.image || defaultImgUrl})`,
        'background-position': 'center center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
      }"
    >
      <div class="overlay"></div>
      <div class="text-wrapper">
        <div class="p-24">
          <div class="font-medium text-white text-center">
            <h1 class="text-4xl">{{ $route.meta.title || "Page Tile" }}</h1>
            <p>
              {{ $route.meta.description || "Home > About Us" }}
            </p>
          </div>

          <div class="my-4"></div>
        </div>
      </div>
    </div>
    <!-- ovverlay arae -->

    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/commons/Footer.vue";
import Header from "../components/commons/Header.vue";


const defaultImgUrl =
  "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691081374/beautiful-car-washing-service_yeptnx.jpg";
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  z-index: 1;
}

.text-wrapper {
  position: relative;
  z-index: 2;
}
</style>
