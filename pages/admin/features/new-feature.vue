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

          <div class="flex gap-x-4">
            <button v-if="!isEditing" @click="editList">Edit</button>
            <button v-else @click="previewList">preview</button>
          </div>
          <template v-if="!isEditing">
            <ol class="list-item" type="1">
              <li v-for="item in previewFeatures">
                <i class="fa-regular fa-circle-check text-secondary-500"></i>
                {{ item }}
              </li>
            </ol>
          </template>

          <div v-else class="relative">
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

        <button v-if="isEditing" @click="createFeature" class="btn p-4">
          save feature
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { $useAdminFetchApi } from "../../../http";

definePageMeta({
  name: "new-feature",
  layout: "admin-layout",
  middleware: ["auth", "admin"],

});

const existingArray = ref([]);
const form = reactive<{
  slug: string;
  name: string;
  list: string;
}>({
  slug: "INTERIOR",
  name: "INTERIOR DETAILING",
  list: `Vacuum 
  trunk 
  stain removal
  leather/fabric cleaning & conditioning
  mat/rugs shampooing
  vinyl/plastic restoration
  door jambs
  dashboard
  roof
  AC vents flushing & steaming,cockpits`,
});

const isEditing = ref(true);

const previewFeatures = ref([] as string[]);

function previewList() {
  isEditing.value = false;
  console.log(form.list.split("\n"));
  previewFeatures.value = form.list.split("\n");
}

function editList() {
  isEditing.value = true;
  console.log(form.list.split("\n"));

  form.list = previewFeatures.value.join("\n");
}

function createFeature() {
  $useAdminFetchApi({
    url: "features",
    method: "POST",
    data: form,
  })
    .then((res: any) => {
      console.log(res);
    })
    .catch((err: any) => {
      console.log(err);
    });
}

/* const form = reactive({
  name: "",
  price: 0.0,
  enabled: true,
  list: [] as string[]
}); */

const editFeaturesText = ref<string>();
</script>

<style scoped>
.list-item {
  margin-top: 10px;
}
</style>
