<template>
  <div class="mx-auto pb-20">
    <div class="relative">
      <div class="grid justify-items-center">
        <div class="absolute inset-0 bg-black opacity-50"></div>

        <img
          :src="image"
          alt=""
          class="h-[600px] w-[800px]  object-cover inset-0 -z-10 rounded-2xl"
        />
      </div>

      <div
        class="grid justify-items-center bg-green-500 mb-40"
        @mouseover="isExpanded = true"
        @mouseleave="isExpanded = false"
      >
        <div
          class="border mb-10 bg-red-400 -mt-20 absolute border-black rounded-2xl w-[400px] bg-white p-20"
        >
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center bg-primary-800 rounded-full w-30 h-30"
          >
            <img class="p-10" :src="icon" alt="" />
          </div>
          <h1 class="text-center heading2">
            {{ title }}
          </h1>
          <p
            class="text-center text-secondary-500 font-semibold"
            v-if="!isExpanded"
          >
            <p class="font-bold">READ MORE</p>
            {{ description.slice(0, 20) }}...
          </p>
          <p
            class="text-center text-secondary-500 font-semibold"
            v-if="isExpanded"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  image: {
    type: String,
    default: "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691167695/01-Express-Exterior_pus9y2.jpg",
    required: true,
  },
  title: {
    type: String,
    default: "Express Exterior",
    required: true,
  },
  description: {
    type: String,
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    required: true,
  },
  icon: {
    type: String,
    default: 'fas fa-plus',
    required: false,
  },
});

let isExpanded = ref(false);
</script>
