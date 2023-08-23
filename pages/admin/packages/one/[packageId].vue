<template>
  <div>
    <Busy v-if="pending"/>

    <div v-else>
      <div class="border grid grid-cols-2 gap-10">
        <div class="p-8">
          <div v-if="carPackages?.name" class="form">
            <div class="mx-auto grid grid-cols-1 gap-y-6">
              <div class="relative">
                <label id="name">Name</label>
                <input
                    v-model="carPackages.name"
                    type="text"
                    placeholder="Silver"
                />
              </div>
              <div class="relative">
                <label id="duration">Duration</label>
                <input
                    v-model="carPackages.duration"
                    type="text"
                    placeholder="Silver"
                />
              </div>
              <div class="relative">
                <label id="price">Price (₦)</label>
                <input v-model="carPackages.price" type="number"/>
              </div>

              <div class="relative">
                <label id="price">Notice</label>
                <textarea
                    v-model="carPackages.notice"
                    type="text"
                    rows="3"
                    placeholder="N20,000"
                />
              </div>

              <button class="btn" @click="updateOne">Update Package</button>
            </div>
          </div>
        </div>
        <div>

          <AdminFeaturesSelector/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FeaturesType, MetaType} from "types/model";
import Busy from "~/components/commons/Busy.vue";
import {$useAdminFetchApi, useAdminAxiosRequest} from "~/http";

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
      })
      .catch((err) => {
        pending.value = false;
      });
}

function updateOne() {
  pending.value = true;
  $useAdminFetchApi({
    url: `packages/${packageUuid.value}/update`,
    method: "PATCH",
    data: {
      name: carPackages.value.name,
    },
  })
      .then((res) => {
        carPackages.value = res.data;
        getData();
        pending.value = false;
        console.log(carPackages.value);
      })
      .catch((err) => {
        getData();

        pending.value = false;
        console.log(err);
      });
}


onMounted(() => {
  getData();
});
</script>

<style scoped></style>
