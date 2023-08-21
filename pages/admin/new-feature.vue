<template>
  <div>
    <h1>new feature</h1>



    <div class="max-w-sm mx-auto">
      <div class="flex flex-col gap-y-8">
        <div>
          <input class="border" v-model="form.name" />
        </div>

        <div>
          <textarea cols="40" rows="10" class="border" v-model="form.list" />
        </div>
      </div>

      <button @click="createFeature" class="btn p-4">save feature</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { $useFetchApi } from "../../http";

definePageMeta({
  name: "new-feature",
  layout: "admin-layout",
});

const existingArray = ref([]);

const form = ref({
  name: "INTERIOR DETAILING",

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
