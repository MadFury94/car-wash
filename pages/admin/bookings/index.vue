<template>
  <div>
    <h1>Admin Booking</h1>
    <div v-if="pending">Loading ...</div>

    <table v-else class="min-w-full divide-y divide-gray-300">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            Name
          </th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          ></th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            CreatedAt
          </th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Updated
          </th>
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr
          v-for="(feature, index) in data?.data"
          :key="feature.uuid"
          ::key="index"
        >
          <td
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
          >
            <div class="text-xs text-gray-700">{{ feature.package.name }}</div>
          </td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <UtilsTimeAgo :value="feature.createdAt" />
          </td>

          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <UtilsTimeAgo :value="feature.updatedAt" />
          </td>
          <!--       <td
                class="relative flex items-center gap-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
              >
                <nuxt-link
                  :to="{
                    name: 'update-feature',
                    params: { featureId: feature.uuid },
                  }"
                  class="text-indigo-600 hover:text-indigo-900"
                  >Edit<span class="sr-only"> {{ feature.name }}</span></nuxt-link
                >
              </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useAdminAxiosRequest } from "~/http";
import { PaginatedMetaData } from "xpress-mongo/src/types/pagination";
import { FeaturesType } from "~/types/model";

definePageMeta({
  layout: "admin-layout",
  name: "admin-bookings",
  title: "Admin",
  description: "This is the admin page of our company",
  middleware: ["auth"]


});

const {
  data,
  pending,
  error,
  execute: getData,
} = SR.get.admin.bookings.all<PaginatedMetaData<FeaturesType>>(undefined, {});
</script>

<style scoped></style>
