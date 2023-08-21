<template>
  <div>
    all packages

    <button class="bg-green-500 p-2">Create Package</button>

    <div class="form">
      <div class="w-80 mx-auto border p-10 grid grid-cols-1 gap-y-6">
        <div class="relative">
          <label id="name">Name</label>
          <input v-model="form.name" type="text" placeholder="Silver" />
        </div>
        <div class="relative">
          <label id="duration">Duration</label>
          <input v-model="form.duration" type="text" placeholder="Silver" />
        </div>
        <div class="relative">
          <label id="price">Price</label>
          <input v-model="form.price" type="number" placeholder="N20,000" />
        </div>


        <button>Add Package</button>
      </div>
    </div>

    <!-- you will need to handle a loading state -->
   <AllPackages/>
  </div>
</template>

<script setup lang="ts">
import { useAxiosFetch } from "../../../http";

import AllPackages from "../packages/components/allPackages.vue";


definePageMeta({
  layout: "admin-layout",
  name: "all-packages",
  title: "All Packages",
  description: "This is the all packages page of our company",
});


const [pending, getData, data, error] = useAxiosFetch("packages/all",{
    
});

const form = {
  duration: "8 to 9 hours",
  name: "PREMIUM DETAILING",
  price: 35000,
};



const addPackage = () => {
  console.log(form);
  // onMounted(getData);
};
</script>

<style scoped></style>
