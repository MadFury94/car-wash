<template>
  <div class="bg-red-500">
    <div class="bg-secondary-500 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl
          class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4"
        >
          <div
            v-for="stat in stats"
            :key="stat.id"
            class="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt
              class="leading-7 text-primary-500 font-semibold uppercase heading"
            >
              {{ stat.name }}
            </dt>
            <dd
              class="order-first text-5xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { id: 1, name: "Years of Experience", value: "25 " },
  { id: 2, name: "Total Cars Washed", value: "38K" },
  { id: 3, name: "Awards & Recognition", value: "17" },
  { id: 4, name: "Trusted Clients", value: "14K" },
];
</script>
