<template>
  <div>
    <Modal
      max-size="max-w-md"
      @on-close="modalActive = false"
      v-if="modalActive"
    >
      <div class="form">
        <div
          class="bg-gray-50 mx-auto border pt-14 px-4 pb-10 grid grid-cols-1 gap-y-6"
        >
          <div class="relative">
            <label id="name">Name</label>
            <input v-model="form.name" type="text" placeholder="Silver" />
          </div>
          <div class="relative">
            <label id="duration">Duration</label>
            <input v-model="form.duration" type="text" placeholder="Silver" />
          </div>
          <div class="relative">
            <label id="price">Price (₦)</label>
            <input v-model="form.price" type="number" placeholder="N20,000" />
          </div>

          <div class="relative">
            <label id="price">Notice</label>
            <textarea v-model="form.notice" type="text" placeholder="N20,000" />
          </div>

          <button class="btn" @click="createPackage">Add Package</button>
        </div>
      </div>
    </Modal>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">
            All Packages ({{ pending ? "  " : data.meta.total }})
          </h1>
          <p class="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            @click="modalActive = true"
            type="button"
            class="btn btn-primary"
          >
            Add Package
          </button>
        </div>
      </div>
      <div>
        <section>
          <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
              >
                <div
                  class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
                >
                  <TableSkeletalLoader v-if="pending" />

                  <table v-else-if="data.data">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th
                          scope="col"
                          class="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                      <tr v-for="item in data.data" :key="item.uuid">
                        <td
                          class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0"
                        >
                          <div class="flex items-center">
                            <div class="ml-4">
                              <div class="font-medium text-gray-900">
                                {{ item.name }}
                              </div>
                              <div class="mt-1 text-gray-500">
                                {{ item.type }}
                              </div>
                              <template v-if="item.features">
                                <span
                                  class="inline-flex items-center rounded-md bg-secondary-50 px-2 py-1 text-xs font-medium text-secondary-700 ring-1 ring-inset ring-secondary-700/10"
                                >
                                  {{ item.features.length }}
                                  Features</span
                                >
                              </template>
                            </div>
                          </div>
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
                        >
                          <div class="text-gray-900">
                            {{ item.duration }}
                          </div>
                          <div class="mt-1 text-gray-500">
                            <Amount :value="item.price" />
                          </div>
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
                        >
                          <span
                            :class="[
                              item.isActive
                                ? 'bg-green-100 text-green-800 ring-green-600/20'
                                : 'bg-gray-100 text-gray-800',
                            ]"
                            class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                          >
                            {{ item.isActive ? "Active " : "Disabled" }}</span
                          >
                          {{ item.isActive }}
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
                        >
                          <TimeAgo :value="item.createdAt" />
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
                        >
                          <TimeAgo :value="item.updatedAt" />
                        </td>
                        <td
                          class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                        >
                          <div class="flex gap-x-2 items-center">
                            <ToggleButton
                                @update:model-value="value => updatePackage(item, value)"
                              v-model="item.isActive"
                            />

                            <nuxt-link
                              v-if="item.uuid"
                              :to="{
                                name: '_package.one',
                                params: { packageId: item.uuid },
                              }"
                              class="text-indigo-600 hover:text-indigo-900"
                              >Edit<span class="sr-only">, </span></nuxt-link
                            >
                            <button @click="deletePackage(item.uuid)">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- you will need to handle a loading state -->
  </div>
</template>

<script setup lang="ts">
import { PackageDetails } from "types/model";

import { PaginatedMetaData } from "xpress-mongo/src/types/pagination";
import Amount from "~/components/utils/Amount.vue";
import TimeAgo from "~/components/utils/TimeAgo.vue";
import { $useAdminFetchApi } from "~/http";

definePageMeta({
  layout: "admin-layout",
  name: "all-packages",
  title: "All Packages",
  description: "This is the all packages page of our company",
});

const modalActive = ref(false);

const form = ref({
  duration: "8 to 9 hours",
  name: "PREMIUM DETAILING",
  price: 35000,
  type: "saloon",
  notice: "₦8,500 extra Logistics fee to Mainland.",
});

const {
  data,
  pending,
  error,
  execute: getData,
} = SR.get.admin.packages.all<PaginatedMetaData<PackageDetails>>({}, {});

async function createPackage() {
  $useAdminFetchApi({
    url: "packages",
    method: "POST",
    data: form.value,
  })
    .then((res) => {
      console.log(res);
      modalActive.value = false;
    })
    .catch((err) => {
      console.log(err);
    });
  /*   await SR.post.admin.packages({
       data: form.value,
     })*/
}

async function deletePackage(uuid: string) {
  console.log(uuid, "delete Stuff");

  await SR.delete.admin.packages.delete({
    packageUuid: uuid,
  });

  getData();
  console.log(uuid, "get emit");
}

async function updatePackage(item: PackageDetails,newValue: boolean) {
  console.log(item.isActive, "get emit");
  item.isActive = newValue;

  try {
    await $useAdminFetchApi({
      url: `packages/${item.uuid}`,
      method: "PATCH",
      data: item
    });

    getData();
  } catch (e) {
    getData();

    console.log(e);
  }
}
</script>

<style scoped></style>
