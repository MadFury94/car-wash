<template>
  <div v-if="pending">Loading ...</div>
  <div
    v-else
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="flex justify-center">
      <div>
        <p>{{ data?.package.name }}</p>
        <p>{{ data?.package.price }}</p>
      </div>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6 form">
        <div class="relative">
          <label>Full Name</label>
          <div class="mt-2">
            <input
            v-model="form.name"
              type="text"
              autocomplete="name"
              placeholder="first name and last name"
            />
          </div>
        </div>

        <div>
          <button @click="updateBooking" type="submit" class="btn w-full">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $useFetchApi, useAxiosRequest } from "../../http";

definePageMeta({
  name: "booking",
});

const form = reactive({
  name: "Bob Alice",
});

const $route = useRoute();

const [pending, getData, data, error] = useAxiosRequest<{
  name: string;
}>(`bookings/one/${$route.params.id}`);

onMounted(() => {
  getData();
});

function updateBooking() {
  $useFetchApi({
    url: `bookings/${$route.params.id}/update`,
    method: "PATCH",
    data: form,
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
