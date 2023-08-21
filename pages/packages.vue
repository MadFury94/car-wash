<template>
  <div>
    <!-- you will need to handle a loading state -->
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-for="item in data">
        <!-- do something -->
        {{ item.name }}
      </div>
    </div>

    <PackagesSection  :package-data="packageData" />
  </div>
</template>

<script setup lang="ts">
import { useAxiosRequest } from "../http";
import { package_detail_data } from "../store/data";
import PackagesSection from "./sections/PackagesSection.vue";

definePageMeta({
  layout: "pages-layout",
  name: "packagePage",
  title: "our Company Packages ",
  description: "This is the package page of our company",
});

const packageData = package_detail_data;

/* const { pending, data } = useFetch("http://localhost:5620/api/packages/all", {
  lazy: true,
}); */


 const [pending, getData, data, error] =  useAxiosRequest('packages/all')


 onMounted(getData)


</script>

<style scoped></style>
