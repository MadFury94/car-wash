<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-primary-600">
          Shine and Protect
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Sprynx Multi - Superior Car Wash & Detailing
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Experience unmatched care for your vehicle. Every swirl, every
          sparkle, speaks of our dedication.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-600"
              >
                <component
                  :is="feature.icon"
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ShieldCheckIcon,
  SparklesIcon,
  HandRaisedIcon,
  TruckIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Hand Wash",
    description:
      "Gentle care with a meticulous touch. Our experts hand wash your car ensuring every corner shines.",
    icon: HandRaisedIcon,
  },
  {
    name: "Expert Detailing",
    description:
      "Precision detailing to make your car look as good as new. Experience brilliance inside out.",
    icon: TruckIcon,
  },
  {
    name: "Protection Seal",
    description:
      "Guard your vehicle against the elements. Our protection seal ensures longevity and maintains the shine.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Eco-Friendly Products",
    description:
      "Committed to the environment. We use eco-friendly products ensuring the best care for your vehicle and nature.",
    icon: SparklesIcon,
  },
];
</script>
