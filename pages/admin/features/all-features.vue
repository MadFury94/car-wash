<template>
  <div>
    <Modal
      max-size="max-w-md"
      @on-close="modalActive = false"
      v-if="modalActive"
    >
      <div class="form">
        <div class="bg-gray-50 p-10">
          <div>
            <div class="relative">
              <label>Name:</label>
              <input type="text" v-model="form.name" />
            </div>
          </div>

          <button @click="createFeature" class="btn p-4 mt-8 w-full">
            Create feature
          </button>
        </div>
      </div>
    </Modal>
    <!-- you will need to handle a loading state -->


    <div>
      <div class="px-4 sm:px-6 lg:px-8">
        <div v-if="false" class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900">
              Features ( {{ data.meta.total }})
            </h1>
            <p class="mt-2 text-sm text-gray-700">
              A list of all the feature in your account including their name,
              title, email and role.
            </p>
          </div>
          <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <!--  <nuxt-link
              :to="{ name: 'new-feature' }"
              type="button"
              class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Add Features
            </nuxt-link> -->
            <button @click="modalActive = true" type="button" class="btn">
              Add Features
            </button>
          </div>
        </div>

        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
              >
                <TableSkeletalLoader v-if="pending" />

                <table v-else-if="data">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col"></th>
                      <th scope="col">CreatedAt</th>
                      <th scope="col">Updated</th>
                      <th scope="col">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr
                      v-for="(feature, index) in data.data"
                      :key="feature.uuid"
                    >
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        {{ feature.name }}
                        <div class="text-xs text-gray-700">
                          {{ feature.list[0] }}...
                        </div>
                      </td>
                      <td class="text-sm text-gray-500"></td>
                      <td class="text-sm text-gray-500">
                        <UtilsTimeAgo :value="feature.createdAt" />
                      </td>

                      <td class="px-3 py-4 text-sm text-gray-500">
                        <UtilsTimeAgo :value="feature.updatedAt" />
                      </td>
                      <td
                        class="relative flex items-center gap-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                      >
                        <button @click="deleteFeature(feature.uuid)">
                          Delete
                        </button>
                        <nuxt-link
                          :to="{
                            name: 'update-feature',
                            params: { featureId: feature.uuid },
                          }"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit<span class="sr-only">
                            {{ feature.name }}</span
                          ></nuxt-link
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FeaturesType } from "types/model";
import { PaginatedMetaData } from "xpress-mongo/src/types/pagination";
import { $useAdminFetchApi } from "~/http";
import Modal from "../../../components/Modal.vue";

definePageMeta({
  layout: "admin-layout",
  name: "all-features",
  middleware: "auth",
});
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

const $router = useRouter();

const modalActive = ref(false);

const {
  data,
  pending,
  error,
  execute: getData,
} = SR.get.admin.features.all<PaginatedMetaData<FeaturesType>>(undefined, {});

function deleteFeature(featureUuid: string) {
  console.log("delete", featureUuid);

  $useAdminFetchApi({
    url: `features/${featureUuid}`,
    method: "DELETE",
  })
    .then((res: any) => {
      console.log(res);

      getData();
    })
    .catch((err: any) => {
      console.log(err);
    });
}

function createFeature() {
  $useAdminFetchApi({
    url: "features",
    method: "POST",
    data: form,
  })
    .then((res: any) => {
      console.log(res.data.data.uuid);

      /*       $router.push({
                    name: "update-feature",
                    params: { featureId: res.data.data.uuid },
                  }); */

      modalActive.value = false;

      console.log(res);
    })
    .catch((err: any) => {
      console.log(err);
    });
}
</script>

<style scoped></style>
