<template>
   <!-- you will need to handle a loading state -->
   <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-for="item in data" :key="item.uuid">
        <!-- do something -->

        {{ item }}
      </div>
    </div>
</template>

<script setup lang="ts">
import { useAxiosFetch } from "../../../../http";

const [pending, getData, data, error] = useAxiosFetch("packages/all");
onMounted(getData);


</script>

<style scoped></style>
