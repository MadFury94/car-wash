<template>
  <div>
    all packages

    <button class="bg-green-500 p-2">Create Package</button>

    <div class="w-80 mx-auto">
      <div class="relative">
        <label
          for="name"
          class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >Price</label
        >
        <input
          type="text"
          name="name"
          id="name"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Jane Smith"
        />
      </div>
    </div>
    <!-- you will need to handle a loading state -->
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-for="item in data" :key="item.uuid">
        <!-- do something -->

        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAxiosFetch } from "../../../http";

definePageMeta({
  layout: "admin-layout",
  name: "all-packages",
  title: "All Packages",
  description: "This is the all packages page of our company",
});

const [pending, getData, data, error] = useAxiosFetch("packages/all");

onMounted(getData);
</script>

<style scoped></style>
