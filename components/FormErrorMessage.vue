<script lang="ts" setup>
import { useFormError } from "~/store/response.store";

const props = defineProps({
  field: {
    type: String,
    required: true,
  },
  form: {
    type: String,
    default: "default",
  },
});

const formError = useFormError();
</script>
<template>
  <p
    class="text-red-500 text-sm"
    v-if="formError.state[form].key === field"
    v-text="formError.state[form].error"
  ></p>
</template>
