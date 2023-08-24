<template>
  <div class="border-2 p-4 rounded-md">
    <Busy v-if="isFetching"/>
    <div v-else>
      <div class="form">
        <div class="relative">
          <label>Search</label>
          <input type="text"/>
        </div>
      </div>

      <div></div>

      <div>
        <span class="bg-green-400" v-if="existingFeature">
          {{ existingFeature.length }}
        </span>

        <span v-if="filteredData" class="bg-yellow-400">
          {{ filteredData.length }}
        </span>
      </div>
      <div>
        <div v-for="item in filteredData" :key="item.uuid">
          <div class="flex justify-between gap-x-10 items-center">
            <div
                :class="[item.selected ? 'border-blue-400' : 'border-gray-300']"
                class="border-l-8 rounded-md  my-2 w-full shadow-sm border-2 py-2 pl-4"
            >
              {{ item.name }}
            </div>
            <div class="flex gap-x-8">
              <button @click="addToSelection(item)">Add</button>
              <NuxtLink
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
import {PropType} from "nuxt/dist/app/compat/capi";
import Busy from "~/components/commons/Busy.vue";
import {useAdminAxiosRequest} from "~/http";
import {FeaturesType, MetaType} from "~/types/model";

const [isFetching, getFeatures, data, error] = useAdminAxiosRequest<{
  data: FeaturesType[];
  meta: MetaType;
}>("features/all");

const props = defineProps({
  existingFeature: {
    type: Array as PropType<FeaturesType[]>,
    required: false,
  },
});


const emit = defineEmits(["addToSelection"]);

function addToSelection(item: FeaturesType) {
  console.log("add to selection", item.uuid);

  emit("addToSelection", item);
}


const filteredData = computed(() => {
  const filteredFeatures = data.value?.data.map(feature => {
    if (props.existingFeature.some(selected => selected.uuid === feature.uuid)) {
      return {...feature, selected: true};
    } else {
      return feature;
    }
  });

  return filteredFeatures
});


function filtered() {

  const existingFeatures = [
    {
      "_id": "64e627c22b8f794e9be254ca",
      "updatedAt": "2023-08-23T16:31:13.024Z",
      "createdAt": "2023-08-23T15:37:38.575Z",
      "uuid": "99ad2375-f106-4b74-81d3-5ea247372ba7",
      "list": [
        "Removing minor surface scratches",
        " droplets",
        "& firmly bonded surface contaminants on paint."
      ],
      "slug": "INTERIOR",
      "name": "-\"\"\"££PAINT ENHANCEMENT AND GLOSS/SHINE",
      "active": true
    },
    {
      "_id": "64e5fce7091bbc16dd44672c",
      "updatedAt": "2023-08-23T13:53:45.006Z",
      "createdAt": "2023-08-23T12:34:47.872Z",
      "uuid": "bf123280-cf5a-4a6b-9302-8c9b939eea77",
      "list": [
        "Shining",
        "Polishing",
        "retouch",
        "Re painting"
      ],
      "slug": "INTERIOR",
      "name": "PAINT"
    }
  ]

  const allFeatures = [
    {
      "_id": "64e627c22b8f794e9be254ca",
      "updatedAt": "2023-08-23T16:31:13.024Z",
      "createdAt": "2023-08-23T15:37:38.575Z",
      "uuid": "99ad2375-f106-4b74-81d3-5ea247372ba7",
      "list": [
        "Removing minor surface scratches",
        " droplets",
        "& firmly bonded surface contaminants on paint."
      ],
      "slug": "INTERIOR",
      "name": "-\"\"\"££PAINT ENHANCEMENT AND GLOSS/SHINE",
      "active": true
    },
    {
      "_id": "64e5fce7091bbc16dd44672c",
      "updatedAt": "2023-08-23T13:53:45.006Z",
      "createdAt": "2023-08-23T12:34:47.872Z",
      "uuid": "bf123280-cf5a-4a6b-9302-8c9b939eea77",
      "list": [
        "Shining",
        "Polishing",
        "retouch",
        "Re painting"
      ],
      "slug": "INTERIOR",
      "name": "PAINT"
    },
    {
      "_id": "64e5448d091bbc16dd446729",
      "updatedAt": "2023-08-22T23:28:13.437Z",
      "createdAt": "2023-08-22T23:28:13.437Z",
      "uuid": "3fa1d33f-57c4-4d11-8630-f709766418a4",
      "list": [
        "Vacuum ",
        "  trunk ",
        "  stain removal",
        "  leather/fabric cleaning & conditioning",
        "  mat/rugs shampooing",
        "  vinyl/plastic restoration",
        "  door jambs",
        "  dashboard",
        "  roof",
        "  AC vents flushing & steaming,cockpits"
      ],
      "slug": "INTERIOR",
      "name": "INTERIOR DETAILING"
    },
    {
      "_id": "64e34a407a500c618a9dba9e",
      "updatedAt": "2023-08-21T11:28:00.223Z",
      "createdAt": "2023-08-21T11:28:00.223Z",
      "uuid": "7ca6f46b-d320-4add-a40a-3ed86f0a33d5",
      "list": [
        "Removing Minor Surface Scratches",
        "\nDroplets",
        "\n& Firmly Bonded Surface Contaminants On Paint."
      ],
      "name": "PAINT ENHANCEMENT AND GLOSS/SHINE"
    },
    {
      "_id": "64e349df7a500c618a9dba9d",
      "updatedAt": "2023-08-21T11:26:23.105Z",
      "createdAt": "2023-08-21T11:26:23.105Z",
      "uuid": "ca2a149c-0434-47ad-98cb-56a01a4ff95d",
      "list": [
        "Engine Bay Cleaning",
        "Degreasing",
        "Protecting Engine From Rust",
        "Restoring Engine Shine.\n"
      ],
      "name": "ENGINE"
    }
  ]

  const filteredFeatures = allFeatures.map(feature => {
    if (existingFeatures.some(selected => selected.uuid === feature.uuid)) {
      return {...feature, selected: true};
    } else {
      return feature;
    }
  });

  console.log(filteredFeatures);
}

onMounted(() => {
  getFeatures();
  filtered();
})
</script>

<style scoped></style>
