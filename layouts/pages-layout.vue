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
        <div class="p-10">
          <div class="font-medium text-white text-2xl text-center">
            <h1>{{ $route.meta.title || 'Page Tile' }}</h1>
            <p>
              {{ $route.meta.description  || 'Page Description'}}
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
import Footer from "./Footer.vue";
import Header from "./Header.vue";

const defaultImgUrl = "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/10/blog_6.jpg"

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
