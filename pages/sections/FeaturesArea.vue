<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-2 gap-8">
      <div
        v-for="(item, index) in hover"
        :key="index"
        class="rounded-lg border bg-white hover:bg-secondary-200 py-4 px-2 transition-colors duration-300 ease-in-out relative cursor-pointer"
      >
        <div class="p-2">
          <img class="w-10 h-10" :src="item.image" alt="" />
        </div>
        <div class="text-gray-90">
          <h1 class="heading2 px-4">{{ item.text }}</h1>
          <h1 class="px-4">{{ item.description }}</h1>
        </div>
        <div
          class="absolute top-0 right-0 mr-3 mt-3 text-2xl font-semibold text-gray-600 hover:text-gray-900"
        >
          0{{ index + 1 }}
        </div>
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
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692465423/car-service_n2g8d6.png",
    text: "Eco-Friendly Car Wash",
    description:
      "Our eco-friendly products ensure the best care for your vehicle while preserving the environment. Experience a clean that cares.",
    link: "#",
  },
  {
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692465378/car-seat_ao2dna.png",
    text: "Premium Interior Detailing",
    description:
      "From leather conditioning to meticulous vacuuming, experience a pristine interior that feels brand new.",
    link: "#",
  },
  {
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692465378/car_1_wnlwr4.png",
    text: "Protective Wax Finish",
    description:
      "Shine and shield. Our high-quality wax finish ensures your car’s paint remains vibrant while offering protection from the elements.",
    link: "#",
  },
  {
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692465378/power-washing_xmzydx.png",
    text: "Undercarriage Cleaning",
    description:
      "Protect your car from rust and corrosion with our undercarriage cleaning. Essential care for prolonged vehicle health.",
    link: "#",
  },
]);
</script>

<style>
.heading2 {
  transition: color 0.3s ease;
}
</style>
