<template>
  <div>
    <div class="flex justify-center">
      <div>
        <h1 class="text-center font-bold text-2xl">New feature</h1>
        <nuxt-link :to="{ name: 'all-features' }">View all features</nuxt-link>
      </div>
    </div>

    <div class="form">
      <div class="max-w-sm mx-auto">
        <div class="flex flex-col gap-y-8">
          <div class="relative">
            <label>Name:</label>
            <input type="text" v-model="form.name" />
          </div>

          <div class="relative">
            <label>Features:</label>
            <textarea
              type="text"
              cols="40"
              rows="10"
              class="border"
              v-model="form.list"
            />
          </div>
        </div>

        <button @click="createFeature" class="btn p-4">save feature</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { $useFetchApi } from "../../../http";

definePageMeta({
  name: "new-feature",
  layout: "admin-layout",
});

const existingArray = ref([]);

const form = ref({
  name: "",
  list: "",
});

function createFeature() {
  $useFetchApi({
    url: "packages/add-feature",
    method: "POST",
    data: form.value,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<style scoped>
.list-item {
  margin-top: 10px;
}
</style>
