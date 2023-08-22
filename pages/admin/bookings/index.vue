<template>
  <div>
    <h1>Admin Booking</h1>
    <div v-if="pending">Loading ...</div>
    <div v-else>
        {{ data?.meta }}
      <div v-for="item in data?.data">
        <!-- do something -->
        {{ item.package.name }}
      </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { useAdminAxiosRequest } from "../../../http";
definePageMeta({
  layout: "admin-layout",
  name: "admin-bookings",
  title: "Admin",
  description: "This is the admin page of our company",
});

const [pending, getData, data, error] = useAdminAxiosRequest<{
  data: any;
  meta: any;
}>("bookings/all");

onMounted(() => {
  getData();
});
</script>

<style scoped></style>
