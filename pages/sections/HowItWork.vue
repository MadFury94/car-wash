<template>
  <div class="bg-gray-200">
    <!-- First Section  -->
    <div class="lg:px-44">
      <div class="bg-primary-500 grid grid-cols-5 rounded-lg p-10">
        <div
          class="text-secondary-500 col-span-1 text-7xl grid place-content-center"
        >
          <i class="fa fa-regular fa-comment-question text-6xl"></i>
        </div>
        <div class="col-span-3">
          <h1
            class="text-white lg:text-left text-center text-3xl w-full my-4 font-semibold"
          >
            Do you need help with your vehicle?
          </h1>
          <p class="text-gray-300 py-2 lg:text-left text-center">
            Send us a message, or phone 1-800 234 567 bbetween 09:00 and 180:00
            Mon-Sat
          </p>
        </div>
        <div class="grid place-content-center col-span-1">
          <button class="btn3">Request a Call Back</button>
        </div>
      </div>
    </div>

    <!-- Second section  -->
    <div>
      <div class="mt-4 text-center py-2">
        <!-- pill info  -->
        <div class="">
          <PillInfo title="HOW IT WORKS" class="" />
        </div>
        <!-- Header and Paragragh -->
        <h2 class="heading sm:text-4xl py-2">Our Work Process</h2>
        <p class="py-6 text-base md:text-lg leading-8 text-gray-800">
          Book online. We’ll provide you with a trusted, excellent services most
          accurate and fair-price service Estimate.
        </p>
      </div>
      <div class="">
        <div
          class="p-6 space-x-4 grid lg:grid-cols-3 md:grid-cols-2 text-center"
        >
          <div v-for="(item, index) in workprocess" :key="index">
            <!-- icon -->
            <div class="grid place-content-center">
              <div
                class="text-primary-500 rounded-sm bg-white w-24 shadow-2xl transition-shadow text-center py-2"
              >
                <i class="text-5xl p-6" :class="item.icon"></i>
              </div>
            </div>

            <!-- arrow  -->

            <!-- Header    -->
            <div>
              <h1 class="heading py-4 sm:text-4xl">
                {{ item.title }}
                <i class="px-4" :class="item.icon2"></i>
              </h1>
            </div>
            <!-- paragragh -->
            <p
              class="text-base md:text-lg leading-8 text-gray-800 md:text-left"
            >
              {{ item.paragragh }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
type Process = {
  title: string;
  paragragh: string;
  icon: string;
  icon2: any;
};

const workprocess = ref<Process[]>([
  {
    title: "Make an appointment",
    paragragh:
      "Book online and leave your car with us. We'll provide you with a trusted excellent service",
    icon: "fa-solid fa-calendar-days",
    icon2: "fa-solid fa-circle-chevron-right",
  },
  {
    title: "Get Amazing services",
    paragragh:
      "Every cleaner is friendly and reliable. They’ve been background checked & rated 5-stars",
    icon: "fa-solid fa-taxi",
    icon2: "fa-solid fa-circle-chevron-right",
  },
  {
    title: "Pay Online ",
    paragragh:
      "Pay online. We’ll provide you with a trusted, excellent services with door delivery option.",
    icon: "fa-duotone fa-credit-card",
    icon2: false,
  },
]);
</script>
<style scoped></style>
