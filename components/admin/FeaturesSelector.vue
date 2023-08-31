<template>
  <div class="rounded-md">
    <Busy v-if="isFetching" />
    <div v-else>
      <div class="form">
        <div class="relative">
          <label>Search</label>
          <input type="text" />
        </div>
      </div>

      <div></div>

      <div>
        <span class="bg-green-400" v-if="existingFeature">
          {{ existingFeature.length }}
        </span>/

        <span v-if="filteredData" class="bg-yellow-400">
          {{ filteredData.length }}
        </span>
      </div>
      <div>
        <div v-for="item in filteredData" :key="item.uuid">
          <div class="flex justify-between gap-x-10 items-center">
            <div
              :class="[item.selected ? 'border-blue-400' : 'border-gray-300']"
              class="border-l-8 rounded-md my-2 w-full shadow-sm border-2 py-2 pl-4"
            >
              {{ item.name }}
            </div>
            <div class="flex gap-x-8">
              <button
                v-if="item.selected"
                @click="updateFeaturesSelection(item, 'remove')"
              >
                <i  class="far fa-toggle-on text-secondary-500 text-2xl"></i>

              </button>

              <button v-else @click="updateFeaturesSelection(item, 'add')">
                <i  class="far fa-toggle-off text-gray-500 text-2xl"></i>

              </button>
              <NuxtLink
                v-if="false"
                :to="{
                  name: 'update-feature',
                  params: { featureId: item.uuid },
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
import { $useAdminFetchApi, useAdminAxiosRequest } from "~/http";
import { FeaturesType, MetaType } from "~/types/model";

const $route = useRoute();
const packageUuid = computed(() => $route.params.packageId);

const [isFetching, getFeatures, data, error] = useAdminAxiosRequest<{
  data: FeaturesType[];
  meta: MetaType;
}>("features");

const props = defineProps({
  existingFeature: {
    type: Array as PropType<FeaturesType[]>,
    required: false,
    default: () => [],
  },
});

const $emit = defineEmits(["refresh"]);

function updateFeaturesSelection(item: FeaturesType, action: "add" | "remove") {
  const body = {
    feature: item,
    action,
  } as any;
  updatePackage(body, action);
}

function updatePackage(item: FeaturesType, action: "add" | "remove") {
  $useAdminFetchApi({
    url: `packages/${packageUuid.value}/update-package-feature`,
    method: "PATCH",
    data: item,
  })
    .then((res: any) => {
      $emit("refresh");
      getFeatures();
    })
    .catch((err: any) => {
      $emit("refresh");

      getFeatures();

    });
}

const filteredData = computed(() => {
  return data.value?.data.map((feature) => {
    if (
      props.existingFeature.some((selected) => selected.uuid === feature.uuid)
    ) {
      return { ...feature, selected: true };
    } else {
      return feature;
    }
  });
});

onMounted(() => {
  getFeatures();
});
</script>

<style scoped></style>
