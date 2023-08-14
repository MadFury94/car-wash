<template>
  <div>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <div class="mx-auto max-w-4xl text-center">
            <PillInfo title="LET'S HELP" class="flex justify-center" />
            <p
              class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Frequently asked questions
            </p>
          </div>
          <p
            class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
          >
            If your question isn’t listed below, please contact our Customer
            Service on 1-800-123-4567.
          </p>

          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Disclosure
              as="div"
              v-for="faq in faqs"
              :key="faq.question"
              class="pt-6"
              v-slot="{ open }"
            >
              <dt>
                <DisclosureButton
                  class="flex w-full items-start justify-between text-left text-gray-900"
                >
                  <span class="text-base font-semibold leading-7">{{
                    faq.question
                  }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      v-if="!open"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base leading-7 text-gray-600">
                  {{ faq.answer }}
                </p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const faqs = [
  {
    question: "What services does Sprynx Multi offer?",
    answer:
      "Sprynx Multi offers comprehensive car washing and detailing services, including exterior wash, interior cleaning, waxing, paint protection, tire detailing, and more to ensure your vehicle looks its best.",
  },
  {
    question: "How often should I have my car detailed?",
    answer:
      "For vehicles that are used regularly, we recommend a full detailing service every three to six months. However, regular washes in between can help maintain your car's appearance.",
  },
  {
    question: "Are your cleaning products eco-friendly?",
    answer:
      "Absolutely! Sprynx Multi is committed to the environment. We use eco-friendly and biodegradable cleaning products that not only ensure the best care for your vehicle but also have minimal environmental impact.",
  },
  {
    question: "How long does a full car detailing service take?",
    answer:
      "A full car detailing service at Sprynx Multi can take anywhere from 2 to 4 hours, depending on the size and condition of the vehicle. We always aim to provide thorough and quality service in the shortest time possible.",
  },
  {
    question: "Can I book an appointment online?",
    answer:
      "Yes, you can easily book your appointment with Sprynx Multi through our website or mobile app. We recommend booking in advance to ensure your preferred time slot.",
  },
  {
    question: "Do you offer any loyalty or membership programs?",
    answer:
      "Yes, we do! Sprynx Multi values its loyal customers. We offer membership programs that provide regular discounts, priority bookings, and other exclusive perks. Please check our website or contact us for more details.",
  },
  {
    question: "Is it safe for my car's paint?",
    answer:
      "Definitely. At Sprynx Multi, we utilize only top-of-the-line products and techniques that are gentle on your car's paint while effectively removing dirt and contaminants. Our team is trained to ensure the utmost care for your vehicle.",
  },
  // More questions...
];
</script>

<style scoped></style>
