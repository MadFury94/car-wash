<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <i
                      class="fa-regular fa-circle-xmark text-4xl text-white"
                    ></i>
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->

              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-secondary-600 px-6 pb-4"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <NuxtLink
                          v-for="item in navigation"
                          :key="item.name"
                          :to="{ name: item.route.name }"
                          :class="[
                            $route.name === item.route.name
                              ? 'bg-secondary-700 text-white'
                              : 'text-secondary-200 hover:text-white hover:bg-secondary-700',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                          ]"
                        >
                          {{ item.name }}
                        </NuxtLink>
                      </ul>
                    </li>

                    <li class="mt-auto">
                      <a
                        href="#"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-secondary-200 hover:bg-secondary-700 hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->

      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <nuxt-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="{ name: item.route.name }"
                  :class="[
                    $route.name === item.route.name
                      ? 'bg-secondary-700 text-white'
                      : 'text-secondary-200 hover:text-white hover:bg-secondary-700',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                  ]"
                >
                  {{ item.name }}
                </nuxt-link>
              </ul>
            </li>

            <li class="mt-auto">
              <a
                href="#"
                class="group items-center -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-secondary-200 hover:bg-secondary-700 hover:text-white"
              >
                <i class="fa-regular fa-gear"></i>
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <i class="fa-solid fa-bars-staggered text-2xl"></i>
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <div class="flex items-center">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                id="search-field"
                class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                type="search"
                name="search"
              />
            </div>
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            ></button>

            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />

            <!-- Profile dropdown -->

            <ProfileComponent  />
            --

            <!-- Profile dropdown -->
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <BreadCrumbs />

          <!-- Your content -->
          <slot></slot>
          <!-- slot outlet -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {
Dialog,
DialogPanel,
TransitionChild,
TransitionRoot
} from "@headlessui/vue";
import { useAuthStore } from "~/store/auth.store";

const authStore = useAuthStore();

function logOut() {
  authStore.logout();
}

const { currentUser } = useCurrentUser();

const navigation = [
  {
    name: "Dashboard",
    route: { name: "admin-index" },
    icon: "fa-solid fa-house",
  },
  {
    name: "Bookings",
    route: { name: "admin-bookings" },
    icon: "fa-solid fa-house",
  },
  {
    name: "Features",
    route: { name: "all-features" },
    icon: "fa-solid fa-house",
  },
  {
    name: "Packages",
    route: { name: "all-packages" },
    icon: "fa-solid fa-house",
  },
  {
    name: "Home",
    route: { name: "admin-index" },
    icon: "fa-solid fa-house",
  },
];

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);
</script>
