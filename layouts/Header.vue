<template>
<div>
  <div>
    <div class="flex gap-x-4">
      <NuxtLink
        v-for="(item, index) in navigation"
        :key="item"
        :to="{ name: item.route.name }"
        class="text-sm font-semibold leading-6 text-gray-900"
        >{{ item.name }}
      </NuxtLink>
    </div>
  </div>
  <header v-if="false" class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <NuxtLink :to="{name:'index'}" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img
          class="h-8 w-auto"
          src="https://www.sprynxmulti.com/wp-content/uploads/2020/03/sprynx_new_logo-color-01.png"
          alt=""
        />
      </NuxtLink>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <i class="fa-duotone fa-bars h-6 w-6"></i>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="(item, index) in navigation"
          :key="index"
          :to="{ name: item.route.name }"
          class="text-sm font-semibold leading-6 text-gray-900"
          >{{ item.name }}</NuxtLink
        >
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://www.sprynxmulti.com/wp-content/uploads/2020/03/sprynx_new_logo-color-01.png"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="fas fa-window-close">Close menu</span>
            XXX
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="(item, index) in navigation"
                :key="index"
                :to="{ name: item.route.name }"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</div>
</template>

<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { ref } from "vue";

const navigation = [
  {
    name: "Home",
    route: { name: "index" },
    icon: "fa-solid fa-arrow-right",
  },
  {
    name: "About Us",
    route: { name: "aboutPage" },
    icon: "fa-solid fa-arrow-right",
  },
  {
    name: "Contact Us",
    route: { name: "contactPage" },
    icon: "fa-solid fa-arrow-right",
  },
];

const mobileMenuOpen = ref(false);
</script>
