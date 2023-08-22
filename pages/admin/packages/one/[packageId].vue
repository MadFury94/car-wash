<template>
  <div>
    <Busy v-if="pending" />

    <div v-else>
      <div class="border grid grid-cols-2 gap-10">
        <div class="p-8">
          <div v-if="carPackages?.name" class="form">
            {{ carPackages?.name }}
            <div class="mx-auto grid grid-cols-1 gap-y-6">
              <div class="relative">
                <label id="name">Name</label>
                <input
                  v-model="carPackages.name"
                  type="text"
                  placeholder="Silver"
                />
              </div>

              <button class="btn" @click="updatePackage">Update Package</button>
            </div>
          </div>
        </div>
        <div class="bg-red-500 p-10"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Busy from "~/components/commons/Busy.vue";
import { $useAdminFetchApi } from "~/http";

definePageMeta({
  layout: "admin-layout",
  name: "_package.one",
  title: "One Package",
  description: "This is the all packages page of our company",
});

const $route = useRoute();

const packageUuid = computed(() => $route.params.packageId);

interface PackageDetailsType {
  _id: string;
  updatedAt: string;
  createdAt: string;
  price: number;
  type: string;
  name: string;
  duration: string;
  description: string;
  notice: string;
  uuid: string;
}

const pending = ref(false);
const carPackages = ref<PackageDetailsType>();

function getData() {
  pending.value = true;
  $useAdminFetchApi({
    url: `packages/${packageUuid.value}/one`,
    method: "GET",
  })
    .then((res) => {
      carPackages.value = res.data;
      pending.value = false;
      console.log(carPackages.value);
    })
    .catch((err) => {
      pending.value = false;
      console.log(err);
    });
}

onMounted(() => {
  getData();
});

function updatePackage() {}
</script>

<style scoped></style>
