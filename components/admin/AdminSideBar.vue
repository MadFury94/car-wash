<template>
  <div
    class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4"
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
            <li v-for="item in navigation" :key="item.name">
              <a
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-indigo-700 text-white'
                    : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                ]"
              >
                <component
                  :is="item.icon"
                  :class="[
                    item.current
                      ? 'text-white'
                      : 'text-indigo-200 group-hover:text-white',
                    'h-6 w-6 shrink-0',
                  ]"
                  aria-hidden="true"
                />
                {{ item.name }}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div class="text-xs font-semibold leading-6 text-indigo-200">
            Your teams
          </div>
          <ul role="list" class="-mx-2 mt-2 space-y-1">
            <li v-for="team in teams" :key="team.name">
              <a
                :href="team.href"
                :class="[
                  team.current
                    ? 'bg-indigo-700 text-white'
                    : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                ]"
              >
                <span
                  class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                  >{{ team.initial }}</span
                >
                <span class="truncate">{{ team.name }}</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="mt-auto">
          <a
            href="#"
            class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
          >
            <div>Cog</div>

            Settings
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Booking", href: "#", current: false },
  { name: "Packages", href: "#", current: false },
  { name: "Users", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
];
const teams = [
  { id: 1, name: "Home", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
</script>

<style scoped></style>
