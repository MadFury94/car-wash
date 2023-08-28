<template>
  <div class="mx-auto max-w-4xl text-center">
    <PillInfo title="PACKAGES" class="flex justify-center" />
    <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Choose your Package
    </p>
  </div>

  <div v-if="pending">Loading ...</div>
  <template v-else>
    <div v-if="data" class="mt-16 flex justify-center">
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
    <div v-if="data">
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
        <div>
          <div
            class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
          >
            <div class="p-8 sm:p-10 lg:flex-auto">
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
              <div class="mt-10 flex items-center gap-x-4">
                <h4
                  class="flex-none text-sm font-semibold leading-6 text-indigo-600"
                >
                  What’s included
                </h4>
                <div class="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li v-for="(feature, index) in tier.features" :key="index">
                  <CheckIcon
                    class="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </li>
              </ul>
            </div>
            <div
              class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0"
            >
              <div
                class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
              >
                <div class="mx-auto max-w-xs px-8">
                  <p class="text-base font-semibold text-gray-600">
                    Pay once, own it forever
                  </p>
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <span
                      class="text-4xl font-bold tracking-tight text-gray-900"
                      >₦{{ tier.price }}</span
                    >
                  </p>
                  <a
                    href="#"
                    class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Get access</a
                  >
                  <p class="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
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
