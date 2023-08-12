<template>
  <div
    class="grid -mt-40 pb-20 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-1 px-4 "
  >
    <div
      v-for="(item, index) in hover"
      :key="index"
      class="rounded-lg border bg-white hover:bg-secondary-200 hover:text-white h-44 lg:w-64 py-4 px-2 transition-colors duration-300 ease-in-out relative cursor-pointer"
    >
      <div class="p-2">
        <img class="w-10 h-10" :src="item.image" alt="" />
      </div>
      <div class="text-gray-900 hover:text-white">
        <h1 class="heading2 hover:text-white px-4">{{ item.text }}</h1>
      </div>
      <div
        class="absolute top-0 right-0 mr-3 mt-3 text-2xl font-semibold text-gray-600 hover:text-gray-900"
      >
        0{{ index + 1 }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

type HoverButtons = {
  image: string;
  text: string;
  link: string;
};

const hover = ref<any[]>([
  {
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691082648/basket_xt5jlt.png",
    text: "Car Wash 100% without detergents",
    link: "#",
  },
  {
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691082648/basket_xt5jlt.png",
    text: "Car Wash 100% without detergents",
    link: "#",
  },
  {
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691082648/basket_xt5jlt.png",
    text: "Car Wash 100% without detergents",
    link: "#",
  },
  {
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691082648/basket_xt5jlt.png",
    text: "Car Wash 100% without detergents",
    link: "#",
  },
]);
</script>

<style>
.heading2 {
  transition: color 0.3s ease;
}
</style>
