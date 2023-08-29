<script lang="ts" setup>
import { ref } from "vue";

// convert to setup component
const emit = defineEmits(["onClose"]);
const { enter, leave, allowBackdropDismiss } = defineProps({
  maxSize: { type: String, default: "max-w-3xl" },
  modalContentClass: { type: [String, Object], default: "rounded" },
  enter: {
    type: String,
    default: "animate__animated animate__zoomIn animate__faster",
  },
  leave: {
    type: String,
    default: "animate__animated animate__zoomOut animate__faster",
  },
  closeText: { type: Boolean, default: false },
  closeBtn: { type: Boolean, default: true },
  allowBackdropDismiss: { type: Boolean, default: false },
});

const animateClass = ref(enter);
const isLeaving = ref(false);

let closeSetTimeout: any = -1;

function close(wait = true) {
  if (leave && leave.length) {
    isLeaving.value = true;
    animateClass.value = leave;
    clearTimeout(closeSetTimeout);
    closeSetTimeout = setTimeout(() => emit("onClose"), wait ? 300 : 0);
  } else {
    emit("onClose");
  }
}

function onBackdropClick(e: MouseEvent) {
  if (!allowBackdropDismiss) return;

  const path = e.composedPath();

  // get index 0 element
  const target = path[0] as HTMLElement;

  // if target has class backdrop then close
  if (target.classList.contains("backdrop")) close(false);
}
</script>

<template>
  <div
    @click.prevent="onBackdropClick"
    class="modal backdrop"
    style="z-index: 101; top: -10vh"
    :class="animateClass"
  >
    <div :class="['model-container', maxSize].join(' ')">
      <!--content-->
      <div class="modal-content" :class="modalContentClass">
        <div
          class="relative max-h-[80vh] md:max-h-[85vh] lg:max-h-[90vh] overflow-scroll hide-scrollbar mt-20 mx-2"
        >
          <button
            v-if="closeBtn"
            @click="() => close()"
            class="absolute right-0 flex items-center"
          >
            <span v-if="closeText"> Close </span>
            <i class="fal fa-times mx-3 my-2 text-xl"></i>
          </button>
          <section>
            <slot></slot>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div
    :class="{
      'animate__animated animate__fadeIn animate__faster': !isLeaving,
      'animate__animated animate__fadeOut animate__faster': isLeaving,
    }"
  >
    <div class="modal-bg" style="z-index: 100"></div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  @apply overflow-x-hidden overflow-y-auto fixed
  inset-0 z-50 outline-none focus:outline-none
  justify-center items-center flex min-h-screen;

  .modal-content {
    @apply border-0 relative w-full outline-none focus:outline-none;
  }

  .model-container:not(.ignoreModelContainer) {
    @apply relative w-full my-6 mx-auto;
  }
}

.modal-bg {
  @apply opacity-70 fixed inset-0 z-40 bg-secondary-900;
}
</style>
