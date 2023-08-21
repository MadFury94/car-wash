<template>
  <div class="bg-green-500 p-40">
    {{ id }}
    <!-- you will need to handle a loading state -->
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-for="item in data">
        {{ item }}

        <!-- do something -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAxiosRequest } from "../../../http";

definePageMeta({
  name: "one-feature",
  layout: "admin-layout",
});

const $route = useRoute();

const id = $route.params.id;

const [pending, getData, data, error] = useAxiosRequest(`packages/one-feature/`, {
  id: id,
});

onMounted(getData);
</script>

<style scoped></style>
