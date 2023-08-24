<template>
  <div class="border-2 p-4 rounded-md">
    <Busy v-if="isFetching" />
    <div v-else>
      <div class="form">
        <div class="relative">
          <label>Search</label>
          <input type="text" />
        </div>
      </div>

      <!-- {{ data?.meta.total }} -->
      <!-- {{ existingFeature.length }}-- -->
      <!-- {{ filteredData}}----- -->
      <!--      <div class="border-l-8 rounded-md border-gray-300 my-2 shadow-sm border-2 py-2 pl-4"
            >
              {{ item.name }}
            </div>-->

      <div></div>

      <div>
        <span class="bg-green-400" v-if="existingFeature">
          {{ existingFeature.length }}
        </span>

        <span class="bg-yellow-400">
          {{ filteredData.length }}
        </span>
      </div>
      <div>
        <div v-for="item in data?.data" :key="item.uuid">
          <div class="flex justify-between gap-x-10 items-center">
            <div
              class="border-l-8 rounded-md border-gray-300 my-2 w-full shadow-sm border-2 py-2 pl-4"
            >
              {{ item.name }}
            </div>
            <div class="flex gap-x-8">
              <button @click="addToSelection(item)">Add</button>
              <NuxtLink
                :to="{
                  name: 'update-feature',
                  params: { id: item.uuid },
                }"
                >Edit
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import Busy from "~/components/commons/Busy.vue";
import { useAdminAxiosRequest } from "~/http";
import { FeaturesType, MetaType } from "~/types/model";

const [isFetching, getFeatures, data, error] = useAdminAxiosRequest<{
  data: FeaturesType[];
  meta: MetaType;
}>("features/all");

const emit = defineEmits(["addToSelection"]);

function addToSelection(item: FeaturesType) {
  console.log("add to selection", item.uuid);

  emit("addToSelection", item);
}

const filteredData = computed(() => {
  /*   if (!data?.value?.data || !props.existingFeature) return [];
  return data?.value.data.filter(
    (feature) =>
      !props.existingFeature.value.some(
        (existing) => existing.uuid === feature.uuid
      )
  ); */

  return data?.value?.data || [];
});

const props = defineProps<{
  existingFeature: {
    type: PropType<FeaturesType[]>;
    default: () => [];
    required: true;
  };
}>();
onMounted(getFeatures);
</script>

<style scoped></style>
