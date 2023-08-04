<template>
  <div class="py-4 sm:py-10 md:py10">
    <div class="relative isolate">
      <div
        class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-6 gap-4 sm:px-6 lg:px-8 p-4"
      >
        <div
          class="col-span-3 gap-4 bg-white/5 px-6 py-8 ring-1 ring-white/10 rounded-3xl items-center"
        >
          <div class="">
            <img
              class="h-full w-full object-cover rounded-2xl shadow-xl md:h-full md:w-full"
              src="https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691152992/Professional-Washing-and-Cleaning-of-Your-Car_nzhy0n.jpg"
              alt="car"
            />
          </div>
          <div class="grid place-content-center -mt-20">
            <div class="mt-4 md:mt-0 max-w-md mx-auto md:mx-0 items-center">
              <div
                class="lg:items-center flex justify-center md:block border border-primary-500 rounded-lg px-4 py-6 bg-primary-500"
              >
                <div class="grid px-4">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="w-20 h-20"
                        src="https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691158914/goal_whxapr.png"
                        alt=""
                      />
                    </div>
                    <div
                      class="px-1 md:block border-l-2 h-full my-2 border-white"
                    ></div>
                    <div class="py-4 text-center md:text-left w-auto">
                      <h1
                        class="text-base heading3 sm:text-lg md:text-xl lg:heading2"
                      >
                        Founded in 1990
                      </h1>
                      <p
                        class="text-sm text-white md:text-base lg:text-sm sm:text-xs"
                      >
                        Helping our clients for the past 30 years
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <div class="w-full heading1">
            <p class="text-secondary-500">---ABOUT COMPANY</p>
            <h2 class="heading md:text-left sm:text-4xl">
              Professional Washing and Cleaning of Your Car
            </h2>
            <p
              class="mt-6 text-black text-base md:text-lg leading-8 text-gray-300 md:text-left"
            >
              Over the past 6 years we cleaned over 34,000 cars, saved over 8.9
              million liters of water from being used in car washing and
              employed 50 youth. Our legacy is in the youth that gained work and
              life skills, grew their confidence and have moved on to bigger.
            </p>
            <div class="grid grid-cols-4">
              <div class="col-span-2">
                <ul
                  role="list"
                  class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-black text-center md:text-left sm:grid-cols-1"
                >
                  <li
                    v-for="benefit in benefits"
                    :key="benefit"
                    class="flex gap-x-3 md:justify-start"
                  >
                    <div class="text-secondary-500">
                      <span class="material-symbols-outlined">
                        select_check_box
                      </span>
                    </div>

                    {{ benefit }}
                  </li>
                </ul>
              </div>

              <div
                class="mt-10 flex justify-center md:justify-start col-span-2"
              >
                <div
                  class="px-1 md:block border-l-2 h-full my-2 border-primary-500"
                ></div>
                <div class="px-4">
                  <h1 class="text-5xl text-primary-500 py-4">100%</h1>
                  <p class="font-semibold">
                    Satisfaction <br />
                    Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const benefits = [
  "Over 250,000 cleans",
  "VIP & Annual Pass Programs",
  "30 days of paid vacation",
  "100% Satisfaction",
];
</script>
