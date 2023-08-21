<template>
  <div> {{ formattedTime }}</div>
</template>

<script setup lang="ts">

import moment from "moment";
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const formattedTime = computed(() => {
  return moment(props.value).fromNow();
});

</script>

<style scoped></style>
