<template>
  <div>
    <Busy v-if="pending" />

    <div v-else>
      <div class="grid lg:grid-cols-2 gap-10 items-start pt-8">
        <div>
          <div v-if="carPackage?.name" class="form">
            <div class="mx-auto grid grid-cols-1 gap-y-6">
              <div class="relative">
                <label id="name">Name</label>
                <input
                  v-model="carPackage.name"
                  type="text"
                  placeholder="Silver"
                />
              </div>
              <div class="relative">
                <label id="duration">Duration</label>
                <input
                  v-model="carPackage.duration"
                  type="text"
                  placeholder="Silver"
                />
              </div>
              <div class="relative">
                <label id="price">Price (₦)</label>
                <input v-model="carPackage.price" type="number" />
              </div>

              <div class="relative">
                <label>Type:</label>
                <select v-model="carPackage.type">
                  <option value="salon">saloon</option>
                  <option value="suv">suv</option>
                </select>
              </div>

              <div class="relative">
                <label id="price">Notice</label>
                <textarea
                  v-model="carPackage.notice"
                  type="text"
                  rows="3"
                  placeholder="N20,000"
                />
              </div>
              <section>
                <div v-for="(item, index) in carPackage.features">
                  {{ item.name }}
                </div>
              </section>

              
              <CommonsLoadingButton  class="btn" :click="updateOne">Update Packagdde</CommonsLoadingButton>

              <button class="btn" @click="updateOne">Update Package</button>
            </div>
          </div>
        </div>
        <div>
          <AdminFeaturesSelector
            :existing-feature="carPackage!.features"
            @addToSelection="updateSelected"
            @refresh="getData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FeaturesType } from "types/model";
import Busy from "~/components/commons/Busy.vue";
import { $useAdminFetchApi } from "~/http";

definePageMeta({
  layout: "admin-layout",
  name: "_package.one",
  title: "One Package",
  description: "This is the all packages page of our company",
  middleware: ["auth"]

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
  features: FeaturesType[];
}

const carPackage = ref<PackageDetailsType>({});
const selectedFeatures = ref<FeaturesType[]>([]);

function updateSelected(item: FeaturesType) {
  if (!selectedFeatures.value.some((f) => f._id === item._id)) {
    selectedFeatures.value.push(item);
  }
  console.log("selected feature", item.name);
}

const pending = ref(false);

function getData() {
  pending.value = true;
  $useAdminFetchApi({
    url: `packages/${packageUuid.value}`,
    method: "GET",
  })
    .then((res) => {
      carPackage.value = res.data;
      pending.value = false;
    })
    .catch((err) => {
      pending.value = false;
    });
}

function updateOne() {
  pending.value = true;
  $useAdminFetchApi({
    url: `packages/${packageUuid.value}`,
    method: "PATCH",
    data: {
      name: carPackage.value?.name,
      duration: carPackage.value?.duration,
      price: carPackage.value?.price,
      notice: carPackage.value?.notice,
      type: carPackage.value?.type,
    },
  })
    .then((res) => {
      carPackage.value = res.data;
      getData();
      console.log(carPackage.value);
    })
    .catch((err) => {
      getData();

      console.log(err);
    });
}

onMounted(() => {
  getData();
});
</script>

<style scoped></style>
