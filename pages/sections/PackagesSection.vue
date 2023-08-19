<template>
  <div class="bg-white py-24 sm:py-32">
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

      <div class="mt-16 flex justify-center">
        <RadioGroup
          v-model="selectedTier"
          :class="menuStyle"
          class="rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
        >
          <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
          <RadioGroupOption
            as="template"
            v-for="option in packageData"
            :key="option.value"
            :value="option"
            v-slot="{ checked }"
          >
            <div
              :class="[
                checked ? 'bg-secondary-500 text-white' : 'text-gray-500',
                'cursor-pointer rounded-full px-2.5 py-1 ',
              ]"
            >
              <span>{{ option.title }}</span>
            </div>
          </RadioGroupOption>
        </RadioGroup>
      </div>

      <div class="overflow-x-auto mt-10 p-10">
        <div class="">
          <div
            class="isolate gap-x-8 flex no-wrap mx-auto max-w-lg md:max-w-8xl mt-10 xl:mx-0 xl:max-w-none"
          >
            <div
              v-for="(tier, index) in selectedTier.packages"
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
                  <span class="text-4xl font-bold tracking-tight text-gray-900"
                    >₦{{ tier.price }}</span
                  >
                </p>

                <a
                  v-if="false"
                  :href="tier.href"
                  :aria-describedby="tier.id"
                  :class="[
                    tier.mostPopular
                      ? 'bg-secondary-600 text-white shadow-sm hover:bg-secondary-500'
                      : 'text-secondary-600 ring-1 ring-inset ring-secondary-200 hover:ring-secondary-300',
                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                  ]"
                  >Book Now</a
                >

                <ul
                  role="list"
                  class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  <li
                    v-for="(feature, index) in matchFeaturesWithDetails(
                      tier.features
                    )"
                    :key="index"
                    class="flex gap-x-3"
                  >
                    <div v-if="feature?.title">
                      <i
                        class="fa-solid fa-check text-white bg-secondary-500 rounded-xl p-1 text-center"
                      ></i>
                    </div>

                    <div class="flex flex-col">
                      <p v-if="feature?.title">{{ feature?.title }}</p>

                      <div v-if="feature?.description">
                        <template
                          v-for="(item, index) in orderedListItems(
                            feature?.description
                          )"
                        >
                          <ul class="list-disc list-inside">
                            <li class="capitalize">{{ item }}</li>
                          </ul>
                        </template>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <p class="text-center py-4">See more Packages</p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { PackageDetails } from "../../types/model";
/* 
const tiers = [
  {
    title: "Small Size Car",
    value: "small-size-car",
    packages: [
      {
        name: "PREMIUM DETAILING",
        id: "tier-freelancer",
        href: "#",
        price: "85,000",
        description: "The essentials to provide your best work for clients.",
        features: ["INTERIOR", "EXTERIOR", "PAINT", "ENGINE"],
        mostPopular: false,
      },
      {
        name: "Gold Package",
        id: "tier-hobby",
        href: "#",
        price: "85,000",
        description: "The essentials to provide your best work for clients.",
        features: ["INTERIOR", "EXTERIOR", "PAINT"],

        mostPopular: false,
      },

      {
        name: "DIAMOND PACKAGE",
        id: "tier-startup",
        href: "#",
        price: "60",
        description: "A plan that scales with your rapidly growing business.",
        features: ["INTERIOR", "EXTERIOR", "ENGINE"],

        mostPopular: true,
      },
      {
        name: "SILVER PACKAGE",
        id: "tier-startup",
        href: "#",
        price: "₦60",
        description: "A plan that scales with your rapidly growing business.",
        features: ["INTERIOR", "EXTERIOR", "PAINT"],

        mostPopular: false,
      },
      {
        name: "BRONZE PACKAGE",
        id: "tier-startup",
        href: "#",
        price: "60",
        description: "A plan that scales with your rapidly growing business.",
        features: ["INTERIOR", "EXTERIOR"],

        mostPopular: false,
      },
    ],
  },
  {
    title: "Mid Size Car",
    value: "mid-size-car",
    packages: [
      {
        name: "Mid -Express Wash",
        id: "tier-hobby",
        href: "#",
        price: "15",
        description: "The essentials to provide your best work for clients.",
        features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
        mostPopular: false,
      },
      {
        name: "Mid  Supreme Wash",
        id: "tier-freelancer",
        href: "#",
        price: "30",
        description: "The essentials to provide your best work for clients.",
        features: [
          "5 products",
          "Up to 1,000 subscribers",
          "Basic analytics",
          "48-hour support response time",
        ],
        mostPopular: false,
      },
      {
        name: "mid Utra Fullservice",
        id: "tier-startup",
        href: "#",
        price: "60",
        description: "A plan that scales with your rapidly growing business.",
        features: [
          "25 products",
          "Up to 10,000 subscribers",
          "Advanced analytics",
          "24-hour support response time",
          "Marketing automations",
        ],
        mostPopular: true,
      },
    ],
  },

  {
    title: "Full Size Car",
    value: "full-size-car",
    packages: [
      {
        name: "full-- Hobby999",
        id: "tier-hobby",
        href: "#",
        price: "15",
        description: "The essentials to provide your best work for clients.",
        features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
        mostPopular: false,
      },
      {
        name: "Full --- Freelancer",
        id: "tier-freelancer",
        href: "#",
        price: "30",
        description: "The essentials to provide your best work for clients.",
        features: [
          "5 products",
          "Up to 1,000 subscribers",
          "Basic analytics",
          "48-hour support response time",
        ],
        mostPopular: false,
      },
      {
        name: "full ---Startup",
        id: "tier-startup",
        href: "#",
        price: "60",
        description: "A plan that scales with your rapidly growing business.",
        features: [
          "25 products",
          "Up to 10,000 subscribers",
          "Advanced analytics",
          "24-hour support response time",
          "Marketing automations",
        ],
        mostPopular: true,
      },
    ],
  },
]; */

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

const selectedTier = ref(props.packageData[0]);

const checked = ref(false);

type featureTypes = {
  id: "PAINT" | "PAINT-G" | "ENGINE" | "INTERIOR" | "EXTERIOR";
  title: string;
  description: string;
};

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
</script>
