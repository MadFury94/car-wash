<template>
  <div class="bg-gray-200">
    <!-- First Section  -->
    <div class="px-6">
      <div class="bg-primary-500 rounded-lg p-10">
        <div class="text-secondary-500 grid place-content-center">
          <i class="fa fa-solid fa-comment text-5xl"></i>
        </div>
        <div>
          <h1 class="text-white text-center text-3xl my-4 font-semibold">
            Do you need help with your vehicle?
          </h1>
          <p class="text-gray-300 py-4 text-center">
            Send us a message, or phone 1-800 234 567 bbetween 09:00 and 180:00
            Mon-Sat
          </p>
        </div>
        <div class="grid place-content-center">
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
      <div class="p-6 space-x-4 grid lg:grid-cols-3 md:grid-cols-2 text-center">
        <div v-for="(item, index) in workprocess" :key="index">
          <!-- icon -->
          <div class="grid place-content-center">
            <div class="text-primary-500 bg-white w-40 text-center py-2">
              <i class="text-5xl p-6" :class="item.icon"></i>
            </div>
          </div>

          <!-- Header    -->
          <div>
            <h1 class="heading py-4 sm:text-4xl">
              {{ item.title }}
            </h1>
          </div>
          <!-- paragragh -->
          <p class="text-base md:text-lg leading-8 text-gray-800 md:text-left">
            {{ item.paragragh }}
          </p>
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
};

const workprocess = ref<Process[]>([
  {
    title: "Make an appointment",
    paragragh:
      "Book online and leave your car with us. We'll provide you with a trusted excellent service",
    icon: "fa-solid fa-calendar-days",
  },
  {
    title: "Get Amazing services",
    paragragh:
      "Every cleaner is friendly and reliable. They’ve been background checked & rated 5-stars",
    icon: "fa-solid fa-taxi",
  },
  {
    title: "Pay Online ",
    paragragh:
      "Pay online. We’ll provide you with a trusted, excellent services with door delivery option.",
    icon: "fa-duotone fa-credit-card",
  },
]);
</script>
<style scoped></style>
