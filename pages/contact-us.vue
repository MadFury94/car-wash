<template>
  <div>
    <div class="lg:grid grid-cols-5">
      <div class="p-10 col-span-2">
        <PillInfo class="uppercase py-6" title="Contact Info" />
        <h1 class="heading">Contact Details</h1>
        <p>
          We really appreciate you taking the time to get in touch. Please fill
          in the form below.
        </p>

        <div class="flex gap-x-4 mt-5">
          <div class="text-secondary-500 text-3xl">
            <i class="fa fa-solid fa-location"></i>
          </div>
          <div>
            <h1>ADDRESS:</h1>
            <p>
              ISLAND ⇒ Ikoyi, Victoria Island, Lekki, Ajah, Ado/Badore,
              Sangotedo, Abijo, Awoyaya, Lakowe, Eputu & environs. MAINLAND
              =>Surulere, Fadeyi, Yaba, (T & C Applies). 0
            </p>
          </div>
        </div>
        <div class="flex gap-x-4 mt-5">
          <div class="text-secondary-500 text-3xl">
            <i class="fa fa-solid fa-phone"></i>
          </div>
          <div>
            <h1>PHONE NUMBER::</h1>
            <p>07064793621</p>
          </div>
        </div>
        <div class="flex gap-x-4 mt-5">
          <div class="text-secondary-500 text-3xl">
            <i class="fa fa-solid fa-envelope"></i>
          </div>
          <div>
            <h1>E-MAIL:</h1>
            <p>Contact@sprynxmulti.com</p>
          </div>
        </div>
        <div class="flex gap-x-4 mt-10">
          <div>
            <img
              class="w-8"
              src="https://res.cloudinary.com/dqwfjxn8g/image/upload/v1693556743/facebook_heqsae.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="w-8"
              src="https://res.cloudinary.com/dqwfjxn8g/image/upload/v1693556743/tik-tok_ao6fbx.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="w-8"
              src="https://res.cloudinary.com/dqwfjxn8g/image/upload/v1693556742/instagram_acnk6v.png"
              alt=""
            />
          </div>
        </div>
        <div class="mt-20">
          <h2
            class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight"
          >
            Book an Appointment
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">
              ISLAND ⇒ Ikoyi, Victoria Island, Lekki, Ajah, Ado/Badore,
              Sangotedo, Abijo, Awoyaya, Lakowe, Eputu & environs.
            </p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <i class="fa-solid fa-phone text-gray-400"></i>
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>07064793621</p>
                <p class="mt-1">Available 24/7</p>
              </div>
            </div>
            <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <i class="fa-solid fa-envelope text-gray-400"></i>
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>Contact@sprynxmulti.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-10 col-span-3">
        <h1 class="heading mt-10 mb-10">Leave your Message</h1>

        <div class="form relative grid grid-cols-5">
          <div class="col-span-2">
            <label class="capitalize">Name:</label>

            <input
              class="border-secondary-900 border-2 rounded-md"
              placeholder="Enter your name"
              type="text"
            />
          </div>
          <div class="px-4 mb-4 col-span-3">
            <div class="relative">
              <label class="capitalize">Email:</label>

              <input
                class="border-secondary-900 border-2 rounded-md"
                placeholder="Enter your mail"
                type="text"
              />
            </div>
          </div>
          <div class="col-span-4">
            <div class="relative col-span-2">
              <label class="capitalize">Subject:</label>

              <input
                class="border-secondary-900 border-2 rounded-md"
                placeholder="Enter your Subject"
                type="text"
              />
            </div>
            <div class="relative mt-4">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Your message</label
              >

              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <ButtonComponent class="mt-10" title="Submit" />

        <div class="mt-32">
          <h2
            class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight"
          >
            General Support
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">
              For general queries and assistance regarding our Car Wash
            </p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <i class="fa-solid fa-phone text-gray-400"></i>
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>(+234)7064793621</p>
                <p class="mt-1">Mon-Wed & Friday 8am to 7pm PST</p>
                <p class="mt-1">Thurs 8am to 4pm</p>
                <p class="mt-1">Sat 9am to 7pm</p>
              </div>
            </div>
            <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <i class="fa-solid fa-envelope text-gray-400"></i>
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>Contact@sprynxmulti.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-0 lg:px-8">
        <div
          class="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8"
        ></div>
      </div>
    </div>
    <FaqSection />
  </div>
</template>

<script setup lang="ts">
import FaqSection from "./sections/FaqSection.vue";

definePageMeta({
  layout: "general-layout",
  name: "contactPage",
  title: "Contact",
  description: "Home > Contact",
  image:
    "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/09/blog_3.jpg",
});
</script>

<style scoped></style>
