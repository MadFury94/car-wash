<template>
  <div  class="bg-white py-24 sm:py-32">
    <!-- you will need to handle a loading state -->

    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <PillInfo title="PACKAGES" class="flex justify-center" />
        <p
          class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          Choose your Package
        </p>
      </div>

      <div v-if="pending">Loading ...</div>

      <template v-else-if="data">
        <div class="mt-16 flex justify-center">
          <RadioGroup
            v-model="selectedTier"
            :class="menuStyle"
            class="rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
            <RadioGroupOption
              as="template"
              v-for="option in Object.keys(data)"
              :key="option"
              :value="option"
              v-slot="{ checked }"
            >
              <div
                :class="[
                  checked ? 'bg-secondary-500 text-white' : 'text-gray-500',
                  'cursor-pointer rounded-full px-2.5 py-1 ',
                ]"
              >
                <span>{{ option }}</span>
              </div>
            </RadioGroupOption>
          </RadioGroup>
        </div>

        <div v-if="data" class="overflow-x-auto mt-10 p-10">
          <div class="">
            <div
              class="isolate gap-x-8 flex no-wrap mx-auto max-w-lg md:max-w-8xl mt-10 xl:mx-0 xl:max-w-none"
            >
              <div
                v-for="(tier, index) in data[selectedTier]"
                :key="index"
                :class="[
                  tier.mostPopular
                    ? 'ring-2 ring-secondary-600'
                    : 'ring-1 ring-gray-200',
                  'rounded-3xl mx-auto max-w-lg',
                ]"
                class="flex-none mx-4"
              >
                <div class="p-4">
                  <h3
                    :class="[
                      tier.mostPopular ? 'text-secondary-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8 uppercase',
                    ]"
                  >
                    {{ tier.name }}
                  </h3>
                  <p>
                    <i class="fa-regular fa-timer text-secondary-500 pr-2"></i
                    >{{ tier.duration }}
                  </p>
                  <div
                    class="flex items-center mt-4 gap-x-4 font-semibold text-sm text-primary-500"
                  >
                    <i
                      class="fa-sharp fa-regular fa-circle-exclamation text-red-500"
                    ></i>
                    <p class="">₦8,500 extra Logistics fee to Mainland.</p>
                  </div>
                  <p v-if="false" class="mt-4 text-sm leading-6 text-gray-600">
                    {{ tier.description }}
                  </p>

                  <p class="mt-6 flex items-baseline gap-x-1">
                    <span
                      class="text-4xl font-bold tracking-tight text-gray-900"
                      >₦{{ tier.price }}</span
                    >
                  </p>
                  <button @click="createBooking(tier.uuid)">
                    <div
                      :class="[
                        tier.mostPopular
                          ? 'bg-secondary-600 text-white shadow-sm hover:bg-secondary-500'
                          : 'text-secondary-600 ring-1 ring-inset ring-secondary-200 hover:ring-secondary-300',
                        'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                      ]"
                    >
                      Book Now
                    </div>
                  </button>

                  <ul
                    role="list"
                    class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    <li v-for="(feature, index) in tier.features" :key="index">
                      <div class="flex items-center gap-x-2">
                        <div
                          class="bg-secondary-500 p-2 rounded-full h-6 w-6 flex justify-center items-center"
                        >
                          <i class="fa-solid fa-caret-down text-white"></i>
                        </div>
                        <span>{{ feature.name }}</span>
                      </div>

                      <ul v-if="feature.list" class="list-disc list-inside">
                        <li v-for="item in feature.list" class="capitalize">
                          {{ item }}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
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
import { $useFetchApi } from "../../http";

const props = defineProps({
  menuStyle: {
    type: String,
    required: false,
    default: "grid grid-cols-2",
  },
});

const $router = useRouter();

const checked = ref(false);

const { data, pending, error, execute: getData } = SR.get.public.packages.all();

onMounted(() => {
  getData();
});

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
    url: "bookings",
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
