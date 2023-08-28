<template>
  <div class="">
    <!-- you will need to handle a loading state -->
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-if="data?.name" class="form">
        <div class="max-w-lg mx-auto">
          <div class="flex flex-col gap-y-8">
            <div class="relative">
              <label>Name:</label>
              <input type="text" v-model="data!.name" />
            </div>
            <div class="relative">
              <label>Description:</label>
              <textarea type="text" v-model="data!.list"></textarea>
            </div>
            <button @click="updateFeature" class="btn w-full">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FeaturesType } from "types/model";
import { $useAdminFetchApi, useAdminAxiosRequest } from "~/http";

definePageMeta({
  name: "update-feature",
  layout: "admin-layout",
});

const $route = useRoute();

const featureUuid = computed(() => $route.params.featureId);

const [pending, getData, data, error] = useAdminAxiosRequest<FeaturesType>(
  `features/${featureUuid.value}`,
  {
    featureUuid: featureUuid.value,
  }
);

console.log(data.value);

function updateFeature() {
  $useAdminFetchApi({
    url: `features/${featureUuid.value}`,
    method: "PATCH",
    data: data.value,
  })
    .then((res: any) => {
      console.log(res);
    })
    .catch((err: any) => {
      console.log(err);
    });
}

onMounted(() => {
  getData();
  console.log("here");
});
</script>

<style scoped></style>
