<template>
  <!-- you will need to handle a loading state -->
  <div>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Created At
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Updated At
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="carPackage in data" :key="carPackage.uuid">
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">
                          {{ carPackage.name }}
                        </div>
                        <div class="mt-1 text-gray-500">
                          {{ carPackage.type }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900">{{ carPackage.duration }}</div>
                    <div class="mt-1 text-gray-500">
                      <Amount :value="carPackage.price" />
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <span
                      class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                      >Active</span
                    >
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <TimeAgo :value="carPackage.createdAt" />
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <TimeAgo :value="carPackage.updatedAt" />
                  </td>
                  <td
                    class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only"
                        >, {{ carPackage.name }}</span
                      ></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PackageDetails } from "types/model";
import Amount from "../../../../components/utils/Amount.vue";
import TimeAgo from "../../../../components/utils/TimeAgo.vue";

const props = defineProps({
  data: {
    type: Object as PropType<PackageDetails[]>,
    required: false,
  },
});
</script>

<style scoped></style>
