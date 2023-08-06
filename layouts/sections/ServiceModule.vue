<template>
  <div class="mx-auto">
    <div class="relative">
      <div class="grid justify-items-center mb-10">
        <div class="relative rounded-2xl">
          <img
            :src="image"
            alt=""
            class="h-full w-full object-cover rounded-2xl shadow-xl md:h-full md:w-full"
          />
          <div class="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
        </div>
      </div>

      <div class="mb-40 -mt-32 flex justify-center">
        <div
          class="border w-52 absolute border-black bg-white py-10 rounded-2xl"
        >
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20"
          >
            <img
              class="w-full rounded-full p-2 bg-primary-900"
              :src="icon"
              alt=""
            />
          </div>
          <h1
            class="mb-4 text-xl font-semibold text-primary-500 text-center px-10 whitespace-nowrap overflow-hidden overflow-ellipsis overflow-ellipsis-hover\:hover"
          >
            {{ title }}
          </h1>

          <p class="text-center text-secondary-500 text-sm font-semibold">
            Read More
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691167695/01-Express-Exterior_pus9y2.jpg",
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
    default: "fas fa-plus",
    required: false,
  },
});

let isExpanded = ref(false);
</script>

<style scoped></style>
