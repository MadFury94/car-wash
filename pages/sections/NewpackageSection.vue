<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <PillInfo title="PACKAGES" class="flex justify-center" />
        <p
          class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          Choose your Package
        </p>
        <div class="mt-4 flex justify-center">
          <button
            @click="selectedTier = 'saloon'"
            :class="
              selectedTier === 'saloon'
                ? 'bg-secondary-500 text-white'
                : 'text-gray-500'
            "
            class="px-4 py-2 rounded-l-md"
          >
            Saloon
          </button>
          <button
            @click="selectedTier = 'suv'"
            :class="
              selectedTier === 'suv'
                ? 'bg-secondary-500 text-white'
                : 'text-gray-500'
            "
            class="px-4 py-2 rounded-r-md"
          >
            SUV
          </button>
        </div>
      </div>

      <div v-if="pending" class="text-center mt-8">Loading ...</div>

      <template v-else>
        <div v-if="data" class="mt-8">
          <div class="flex flex-col gap-8">
            <div
              v-for="(tier, index) in data[selectedTier]"
              :key="index"
              class="border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <h3
                :class="[
                  tier.mostPopular ? 'text-secondary-600' : 'text-gray-900',
                  'text-lg font-semibold leading-8 uppercase',
                ]"
              >
                {{ tier.name }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">
                <i class="fa-regular fa-timer text-secondary-500 pr-2"></i
                >{{ tier.duration }}
              </p>

              <p class="mt-4 text-xl font-bold">₦{{ tier.price }}</p>
              <ul class="mt-4 space-y-3 text-sm leading-6 text-gray-600">
                <li v-for="(feature, index) in tier.features" :key="index">
                  <div class="flex items-center gap-x-2">
                    <div
                      class="bg-secondary-500 p-2 rounded-full h-6 w-6 flex justify-center items-center"
                    >
                      <i class="fa-solid fa-caret-down text-white"></i>
                    </div>
                    <span>{{ feature.name }}</span>
                  </div>
                </li>
              </ul>

              <div class="mt-6 flex flex-col items-center gap-4">
                <button
                  @click="createBooking(tier.uuid)"
                  class="w-full px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-400"
                >
                  Book Now
                </button>
                <p v-if="tier.mostPopular" class="text-xs text-red-600">
                  Most Popular!
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { $useFetchApi, useAxiosRequest } from "../../http";
import { PackageDetails } from "../../types/model";

const props = defineProps({
  packageData: {
    type: Array as PropType<PackageDetails[]>,
    required: true,
  },
  menuStyle: {
    type: String,
    required: false,
    default: "grid grid-cols-2",
  },
});
const $router = useRouter();

const checked = ref(false);

const [pending, getData, data, error] = useAxiosRequest("packages/all");

onMounted(() => {
  getData();
});

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];
const selectedTier = ref("saloon");

type featureTypes = {
  id: "PAINT" | "PAINT-G" | "ENGINE" | "INTERIOR" | "EXTERIOR";
  title: string;
  description: string;
};

function returnFeatureList(str: string[]) {
  return str.join("\n");
}

const featureDetails = [
  {
    id: "PAINT",
    title: "PAINT ENHANCEMENT AND GLOSS/SHINE",
    description:
      "Removing minor surface scratches, droplets,& firmly bonded surface contaminants on paint.",
  },
  {
    id: "PAINT-G",
    title: "PAINT ENHANCEMENT AND GLOSS/SHINE",
    description:
      "Restoring paint shine,smoothens paint surface,reducing friction between debris & paint, protecting paint from uv Ray’s & salt water.",
  },
  {
    id: "ENGINE",
    title: "ENGINE DETAILING",
    description:
      "Engine bay cleaning,degreasing,protecting engine from rust,restoring engine shine.",
  },
  {
    id: "INTERIOR",
    title: "INTERIOR DETAILING",
    description:
      "Vacuum,trunk,stain removal,leather/fabric cleaning & conditioning,mat/rugs shampooing,vinyl/plastic restoration,door jambs, dashboard,roof,AC vents flushing & steaming,cockpits.",
  },
] as featureTypes[];

function matchFeaturesWithDetails(features: string[]) {
  return features.map((feature) => {
    const matchedFeature = featureDetails.find(
      (detail) => detail.id === feature
    );
    return matchedFeature;
  });
}

function orderedListItems(str: string) {
  const array_of_strings = str.split(",").map((item) => item.trim());

  return array_of_strings;
}

function createBooking(uuid: string) {
  console.log("create booking", uuid);

  $useFetchApi({
    url: "bookings/new",
    method: "POST",
    data: {
      packageUuid: uuid,
    },
  })
    .then((res) => {
      console.log(res);

      $router.push({
        name: "booking",
        params: {
          id: res.data.bookingUuid,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>
