<template>
  <div class="mx-auto">
    <div class="relative">
      <div class="">
        <div class="relative">
          <img :src="image" alt="" class="w-96 object-cover" />
        </div>
      </div>

      <div class="">
        <div class="bg-white p-4">
          <h1 class="mb-4 text-xl font-semibold text-primary-500">
            {{ title }}
          </h1>
          {{ shortDescription }}
          <p
            v-if="!isExpanded.value && props.description.split(' ').length > 10"
            class="text-center text-secondary-500 text-sm font-semibold cursor-pointer"
            @click="toggleExpanded"
          >
            Read More
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
const shortDescription = computed(() => {
  if (props.description.split(" ").length > 10 && !isExpanded.value) {
    return `${props.description.split(" ").slice(0, 10).join(" ")}...`;
  } else {
    return props.description;
  }
});

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped></style>
