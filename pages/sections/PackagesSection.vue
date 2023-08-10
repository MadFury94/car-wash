<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <PillInfo title="PRICING PLAN" class="flex justify-center" />
        <p
          class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          Choose your Package
        </p>
      </div>
      <p
        class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
      >
        Unlimited Washes is for you! Wash whenever you want and enjoy the ease
        of auto monthly billing and you can cancel any time.
      </p>
      <div class="mt-16 flex justify-center">
        <RadioGroup
          v-model="selectedTier"
          class="grid grid-cols-3 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
        >
          <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
          <RadioGroupOption
            as="template"
            v-for="option in tiers"
            :key="option.value"
            :value="option"
            v-slot="{ checked }"
          >
            <div
              :class="[
                checked ? 'bg-indigo-600 text-white' : 'text-gray-500',
                'cursor-pointer rounded-full px-2.5 py-1',
              ]"
            >
              <span>{{ option.title }}</span>
            </div>
          </RadioGroupOption>
        </RadioGroup>
      </div>
      <div
        class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3"
      >
        <div
          v-for="(tier, index) in selectedTier.packages"
          :key="index"
          :class="[
            tier.mostPopular
              ? 'ring-2 ring-indigo-600'
              : 'ring-1 ring-gray-200',
            'rounded-3xl p-8',
          ]"
        >
          <h3
            :id="index"
            :class="[
              tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
              'text-lg font-semibold leading-8',
            ]"
          >
            {{ tier.name }}
          </h3>

          <p class="mt-4 text-sm leading-6 text-gray-600">
            {{ tier.description }}
          </p>

          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-gray-900">{{
              tier.price
            }}</span>
          </p>

          <a
            :href="tier.href"
            :aria-describedby="tier.id"
            :class="[
              tier.mostPopular
                ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
              'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
            ]"
            >Book Now</a
          >

          <ul
            role="list"
            class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
          >
            <li
              v-for="feature in tier.features"
              :key="feature"
              class="flex gap-x-3"
            >
              <div>
                <i
                  class="fa-solid fa-check text-white bg-secondary-500 rounded-xl p-1 text-center"
                ></i>
              </div>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const tiers = [
  {
    title: "Small Size Car",
    value: "small-size-car",
    packages: [
      {
        name: "samll ---Hobby999",
        id: "tier-hobby",
        href: "#",
        price: "$15",
        description: "The essentials to provide your best work for clients.",
        features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
        mostPopular: false,
      },
      {
        name: "small ---Freelancer",
        id: "tier-freelancer",
        href: "#",
        price: "$30",
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
        name: "small --Startup",
        id: "tier-startup",
        href: "#",
        price: "$60",
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
    title: "Mid Size Car",
    value: "mid-size-car",
    packages: [
      {
        name: "Mid -Express Wash",
        id: "tier-hobby",
        href: "#",
        price: "$15",
        description: "The essentials to provide your best work for clients.",
        features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
        mostPopular: false,
      },
      {
        name: "Mid  Supreme Wash",
        id: "tier-freelancer",
        href: "#",
        price: "$30",
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
        price: "$60",
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
        price: "$15",
        description: "The essentials to provide your best work for clients.",
        features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
        mostPopular: false,
      },
      {
        name: "Full --- Freelancer",
        id: "tier-freelancer",
        href: "#",
        price: "$30",
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
        price: "$60",
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
];

const selectedTier = ref(tiers[2]);
</script>
