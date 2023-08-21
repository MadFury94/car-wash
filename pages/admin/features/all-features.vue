<template>
  <div>
    <h1>View all features</h1>

    <!-- you will need to handle a loading state -->
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900">
              Features
            </h1>
            <p class="mt-2 text-sm text-gray-700">
              A list of all the feature in your account including their name,
              title, email and role.
            </p>
          </div>
          <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <nuxt-link
              :to="{ name: 'new-feature' }"
              type="button"
              class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Add Features</nuxt-link
            >
          </div>
        </div>
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-gray-300">
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
                      >
                        Description
                      </th>
                      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="(feature, index) in data" :key="feature.email" ::key="index">
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        {{ feature.name }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        {{ feature.title }}
                      </td>
                      <td
                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                      >
                        <nuxt-link :to="{name:'one-feature', params:{id:feature.uuid}}"
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit<span class="sr-only"
                            > {{ feature.name }}</span
                          ></nuxt-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAxiosRequest } from "../../../http";

definePageMeta({
  layout: "admin-layout",
  name: "all-features",
});

const [pending, getData, data, error] = useAxiosRequest("packages/all-features");

onMounted(getData);
</script>

<style scoped></style>
