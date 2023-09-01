<template>
  <div>
    <div class="lg:flex gap-x-7">
      <div class="bg-white p-24">
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
            <p>345 Park Avenue, San Jose, CA 95110</p>
          </div>
        </div>
        <div class="flex gap-x-4 mt-5">
          <div class="text-secondary-500 text-3xl">
            <i class="fa fa-solid fa-phone"></i>
          </div>
          <div>
            <h1>PHONE NUMBER::</h1>
            <p>1-800-7878-09</p>
          </div>
        </div>
        <div class="flex gap-x-4 mt-5">
          <div class="text-secondary-500 text-3xl">
            <i class="fa fa-solid fa-envelope"></i>
          </div>
          <div>
            <h1>E-MAIL:</h1>
            <p>noreply@envato.com</p>
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
      </div>

      <div class="p-20">
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
              <input
                class="border-secondary-900 border-2 rounded-md w-full form-textarea"
                placeholder="Enter your message"
                type="textarea"
                :rows="8"
              />
            </div>
          </div>
        </div>
        <ButtonComponent class="mt-10" title="Submit" />
      </div>
    </div>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div
          class="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8"
        >
          <div>
            <h2
              class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight"
            >
              Book an Appointment
            </h2>
            <div class="mt-3">
              <p class="text-lg text-gray-500">
                Contact Our Head Office for Bookings
              </p>
            </div>
            <div class="mt-9">
              <div class="flex">
                <div class="flex-shrink-0">
                  <i class="fa-solid fa-phone text-gray-400"></i>
                </div>
                <div class="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123 4567</p>
                  <p class="mt-1">Available 24/7</p>
                </div>
              </div>
              <div class="mt-6 flex">
                <div class="flex-shrink-0">
                  <i class="fa-solid fa-envelope text-gray-400"></i>
                </div>
                <div class="ml-3 text-base text-gray-500">
                  <p>fraudreport@youronlinebanker.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 md:mt-0">
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
                  <p>+1 (555) 123 4567</p>
                  <p class="mt-1">Mon-Fri 8am to 6pm PST</p>
                </div>
              </div>
              <div class="mt-6 flex">
                <div class="flex-shrink-0">
                  <i class="fa-solid fa-envelope text-gray-400"></i>
                </div>
                <div class="ml-3 text-base text-gray-500">
                  <p>support@youronlinebanker.com</p>
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
