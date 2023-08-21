<template>
  <div>
    all packages

    <button class="bg-green-500 p-2">Create Package</button>

    <div class="form">
      <div class="w-80 mx-auto border p-10">
        <div class="relative">
          <label for="name">Price</label>
          <input type="number" name="name" id="name" placeholder="Jane Smith" />
        </div>
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
