<template>
  <div>
    <div href="#" class="inline-flex space-x-6">
      <span
        class="rounded-full bg-secondary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-secondary-500 ring-1 ring-inset ring-indigo-600/10"
        >{{ title }}
      </span>
      <span
        class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600"
      >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">


const props = defineProps({
  title: {
    type: String,
    default: "",
  },

});

</script>

<style scoped></style>
