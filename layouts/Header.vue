<template>
  <header class="w-full bg-white fixed h-20 z-10 top-0 shadow-md">
    <div
      ref="headerRef"
      class="bg-white container mx-auto flex flex-wrap items-center justify-between py-2"
    >
      <div class="flex items-center">
        <div class="text-xl text-primary-500 tracking-wide mr-1">
          <img
            src="https://www.sprynxmulti.com/wp-content/uploads/2020/03/sprynx_new_logo-color-01.png"
            alt="logo"
            class="w-24"
          />
        </div>
      </div>

      <button
        @click="toggleMenu"
        class="lg:hidden px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white top-2"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
        </svg>
      </button>

      <nav
        :class="{ hidden: !open }"
        class="w-full relative lg:w-auto lg:static lg:block lg:justify-end md:items-center"
      >
        <div class="lg:flex lg:items-center lg:w-auto" id="nav-content">
          <ul
            v-for="(name, index) in links"
            :key="index"
            class="lg:flex justify-end flex-1 items-center md:pb-0 pb-10 md:px-0 md:static"
          >
            <li class="mr-3 md:mx-4 md:my-0">
              <a
                class="inline-block font-semibold text-primary-500 hover:text- no-underline hover:text-gray-300 text-sm hover:text-underline py-2 px-4"
                :href="name.url"
                >{{ name.name }}</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

const links = [
  { name: "Home", url: "#" },
  { name: "About", url: "#" },
  { name: "Services", url: "#" },
  { name: "Packages", url: "#" },
  { name: "Contact", url: "#" },
];

const open = ref(false);
const headerRef = ref(null);

function toggleMenu() {
  open.value = !open.value;
}

function closeMenu(e) {
  if (!headerRef.value.contains(e.target)) {
    open.value = false;
  }
}

onMounted(() => {
  window.addEventListener("click", closeMenu);
});

onUnmounted(() => {
  window.removeEventListener("click", closeMenu);
});

watch(open, (newVal) => {
  if (newVal) {
    window.addEventListener("click", closeMenu);
  } else {
    window.removeEventListener("click", closeMenu);
  }
});
</script>
