<template>
  <div class="mx-auto">
    <div v-for="(item, index) in service" :key="index" class="relative">
      <div class="grid justify-items-center">
        <img
          :src="item.image"
          alt=""
          class="h-[600px] w-[800px] object-cover inset-0 -z-10 rounded-2xl"
        />
      </div>

      <div
        class="grid justify-items-center mb-20"
        @mouseover="item.isExpanded = true"
        @mouseleave="item.isExpanded = false"
      >
        <div
          class="border -mt-20 absolute border-black rounded-2xl w-[400px] bg-white p-20"
        >
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center bg-primary-800 rounded-full w-30 h-30"
          >
            <img class="p-10" :src="item.icon" alt="" />
          </div>
          <h1 class="text-center heading2">
            {{ item?.title }}
          </h1>
          <p
            class="text-center text-secondary-500 font-semibold"
            v-if="!item.isExpanded"
          >
          <p class="font-bold">READ MORE</p>

            {{ item.description.slice(0, 20) }}...
          </p>
          <p
            class="text-center text-secondary-500 font-semibold"
            v-if="item.isExpanded"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type Services = {
  image: string;
  title: string;
  description: string;
  icon: string;
  isExpanded: boolean;
};

const service = ref<Services[]>([
  {
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691167695/01-Express-Exterior_pus9y2.jpg",
    title: "Express Exterior",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691169409/car-wash_yq9w1o.png",
    isExpanded: false,
  },
]);
</script>
