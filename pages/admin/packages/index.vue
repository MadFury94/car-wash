<template>
  <div>


    <Modal
      max-size="max-w-md"
      @on-close="modalActive = false"
      class=""
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

    <div class="p-20">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">All Packages {{data?.meta.total  }}</h1>
          <p class="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            @click="modalActive = true"
            type="button"
            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Package
          </button>
        </div>
      </div>
      <div>
        <div v-if="pending">Loading ...</div>

        <AllPackages v-else :data="data?.data" :meta="data?.meta" />
      </div>
    </div>

    <!-- you will need to handle a loading state -->
  </div>
</template>

<script setup lang="ts">
import { MetaType, PackageDetails } from "types/model";
import { $useFetchApi, useAdminAxiosRequest } from "../../../http";

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

const [pending, getData, data, error] = useAdminAxiosRequest<{
  data: PackageDetails  | undefined;
  meta: MetaType;
}>("packages/all");

onMounted(() => {
  getData();
});

function createPackage() {
  $useFetchApi({
    url: "packages/create",
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

<style scoped></style>
