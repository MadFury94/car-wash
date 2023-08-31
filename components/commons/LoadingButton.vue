<template>
    <button :disabled="loading || buttonIsDisabled" @click="onClick" class="loading-button">
      <span v-if="loading">
        <div class="spinner">loadin</div>
      </span>
      <span v-else>
        <slot></slot>
      </span>
    </button>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    loading: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: () => {}
    },
    data: {
      type: Object,
      default: () => ({})
    }
  });
  
  const isLoading = ref(false);
  const buttonIsDisabled = ref(false); // Convert this to a reactive reference
  
  function startLoading() {
    isLoading.value = true;
    buttonIsDisabled.value = true; // Modify the reactive reference
  }
  
  function stopLoading(run: Function | undefined = undefined) {
  isLoading.value = false;
  buttonIsDisabled.value = false;
  if (run && typeof run === 'function') run();
}
  function onClick() {
    if (!props.loading) {
      startLoading();
      props.click();
    }
    console.log('clicked');
  }
  </script>
  