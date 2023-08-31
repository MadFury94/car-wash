<template>
  <div>
    <button v-if="showConfirmation" @click="confirmAction" >
      <i class="fa-regular fa-circle-exclamation text-yellow-500 text-xl"></i>
    </button>
    <button v-else  @click="showConfirmation = true">
      <slot>
        Request Confirmation
      </slot>
    </button>



  </div>
</template>

<script setup lang="ts">

const showConfirmation = ref(false);

const  $emit = defineEmits(['confirm']);
function  confirmAction() {

  showConfirmation.value = false;

  $emit('confirm');
  console.log('confirming action');
}

</script>

<style scoped>

</style>