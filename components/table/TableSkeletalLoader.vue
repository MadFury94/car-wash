<template>
  <table >
    <thead>
    <tr>
      <th class="py-5" scope="col"></th>
      <th class="py-5" scope="col"></th>
      <th class="py-5" scope="col"></th>
      <th class="py-5" scope="col"></th>
      <th class="py-5" scope="col">
        <span class="sr-only">Edit</span>
      </th>
    </tr>
    </thead>
    <tbody>
      <!-- Repeat this row for as many loading rows as you want -->
      <tr v-for="i in 5">
        <td v-for="i in 4" class="p-2">
          <div class="max-w-sm animate-pulse">
            <div class="h-7 bg-gray-300 rounded w-48 mb-4"></div>
          </div>
        </td>

      </tr>
      <!-- End of loading row -->
    </tbody>
  </table>
</template>
<script setup lang="ts">
</script>
