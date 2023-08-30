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
    <div v-if="pending">Loading ...</div>
    <div v-else-if="data?.data" class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">
            All Packages ({{ data?.meta.total }})
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
        <div>
          <AllPackages
            @delete="deletePackage"
            :data="data.data"
            :meta="data.meta"
          />
        </div>
      </div>
    </div>

    <!-- you will need to handle a loading state -->
  </div>
</template>

<script setup lang="ts">
import { PackageDetails } from "types/model";
import { $useAdminFetchApi } from "~/http";

import { PaginatedMetaData } from "xpress-mongo/src/types/pagination";
import AllPackages from "../../../components/admin/admin.packages.all.vue";

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
    })
    .catch((err) => {
      console.log(err);
    });
  /*  await SR.post.admin.packages({
      data: form.value,
    });*/
}

async function deletePackage(uuid: string) {
  console.log(uuid, "delete Stuff");

  /*await SR.delete.admin.packages.delete({
    packageUuid: uuid,
  });

  getData();
  console.log(uuid, "get emit");*/
}
</script>

<style scoped></style>
