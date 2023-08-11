<template>
  <div class="bg-gray-100">
    <!-- First Section  -->
    <div class="lg:px-44">
      <div class="bg-primary-500 grid grid-cols-5 rounded-lg p-10">
        <div
          class="text-secondary-500 col-span-1 text-7xl grid place-content-center"
        >
          <i class="fa-thin fa-comment-question"></i>
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
      <div class="flex justify-center">
        <div class="p-6 grid lg:grid-cols-3 md:grid-cols-2 gap-y-8 text-center">
          <div class="" v-for="(item, index) in workProcess" :key="index">
            <!-- icon -->
            <div class="flex justify-center max-w-lg">
              <div
                class="text-primary-500 bg-white relative w-32 rounded-md h-32 shadow-md transition-shadow text-center py-2"
              >
                <i class="text-5xl p-6" :class="item.icon"></i>

                <span
                  class="absolute bg-secondary-500 rounded-full -top-4 -right-4"
                >
                  <div class="border-secondary-200 border-4 rounded-full">
                    <span
                      class="grid place-content-center w-10 h-10 text-white text-2xl font-light z-10"
                      >0{{ index + 1 }}</span
                    >
                  </div>
                </span>
              </div>
            </div>

            <!-- arrow  -->

            <!-- Header    -->
            <div>
              <h1 class="text-xl py-4">
                {{ item.title }}
              </h1>
            </div>
            <!-- paragraph -->
            <p class="md:text-lg max-w-md leading-8 text-gray-800 text-center">
              {{ item.paragraph }}
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
  paragraph: string;
  icon: string;
  icon2: any;
};

const workProcess = ref<Process[]>([
  {
    title: "Make an appointment",
    paragraph:
      "Book online and leave your car with us. We'll provide you with a trusted excellent service",
    icon: "fa-solid fa-calendar-days",
    icon2: "fa-solid fa-circle-chevron-right",
  },
  {
    title: "Get Amazing services",
    paragraph:
      "Every cleaner is friendly and reliable. They’ve been background checked & rated 5-stars",
    icon: "fa-solid fa-taxi",
    icon2: "fa-solid fa-circle-chevron-right",
  },
  {
    title: "Pay Online ",
    paragraph:
      "Pay online. We’ll provide you with a trusted, excellent services with door delivery option.",
    icon: "fa-duotone fa-credit-card",
    icon2: false,
  },
]);
</script>
<style scoped></style>
