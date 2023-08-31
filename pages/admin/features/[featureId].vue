<template>
  <div class="">
    <!-- you will need to handle a loading state -->
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-if="oneFeature?.name" class="form">
        <div class="max-w-lg mx-auto">
          <div class="flex flex-col gap-y-4">
            <div class="relative">
              <label>Name:</label>
              <input type="text" v-model="oneFeature!.name" />
            </div>
            <div class="flex justify-end gap-x-4 text-secondary-500">
              <button v-if="!isEditing" @click="editList">
                <i class="fa-solid fa-pen-to-square"></i>Edit
              </button>
              <button v-else @click="previewList">
                <i class="fa-solid fa-eye"></i> preview
              </button>
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
              <label>Description:</label>
              <textarea
                cols="40"
                rows="10"
                class="border"
                type="text"
                v-model="oneFeature!.list"
              ></textarea>
            </div>
          </div>
          <button
            @click="updateFeature"
            class="btn btn-primary w-full mt-4"
            :disabled="!isEditing"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { $useAdminFetchApi } from "~/http";

definePageMeta({
  name: "update-feature",
  layout: "admin-layout",
  middleware: "auth",
});

const isEditing = ref(true);

const oneFeature = ref<any>();

const pending = ref(false);

const previewFeatures = ref([] as string[]) as any;

const $route = useRoute();

const featureUuid = computed(() => $route.params.featureId);

/*const [pending, getData, data, error] = useAdminAxiosRequest<FeaturesType>(
  `features/${featureUuid.value}`,
  {
    featureUuid: featureUuid.value,
  },
);*/

function getData() {
  $useAdminFetchApi({
    url: `features/${featureUuid.value}`,
    method: "GET",
  })
    .then((res: any) => {
      oneFeature.value = res.data;
      oneFeature.value.list = res.data.list.join("\n");
      previewFeatures.value = res.data.list;
      pending.value = false;

      console.log(res.data.list);
    })
    .catch((err: any) => {
      pending.value = false;

      console.log(err);
    });
}

function previewList() {
  isEditing.value = false;
  previewFeatures.value = oneFeature!.value!.list.split("\n");
}

function editList() {
  isEditing.value = true;
  oneFeature!.value!.list = previewFeatures.value.join("\n");
}

function updateFeature() {
  $useAdminFetchApi({
    url: `features/${featureUuid.value}`,
    method: "PATCH",
    data: oneFeature.value,
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
