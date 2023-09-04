<template>
  <div class="p-20">
    <!-- <div class="border-2">
      {{ rainChecksData.title }}
      {{ rainChecksData.description }}
    </div> -->
    <div>
      <!-- use v-html so u can add stylings liek i did -->
      <!-- <div v-html="coupon_referral.description"></div> -->
    </div>
    <h1 class="font-bold text-center mb-6">Terms and conditions</h1>

    <div>
      <div v-for="item in terms_conditions_data" :key="item.key">
        <h2 class="font-bold">{{ item.title }}</h2>

        <p v-html="item.description" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { terms_conditions_data } from "../store/page.data";

definePageMeta({
  name: "terms-and-condition",
});

interface TermConditionItem {
  key: string;
  title: string;
  description: string;
}

function returnKeyData<T extends TermConditionItem | undefined>(
  key: string
): T {
  return terms_conditions_data.find((item) => item.key === key) as T;
}

// use this method to get a specific key you want
//eg,  i want to get only rain check data
const rainChecksData = returnKeyData<TermConditionItem>("rain_checks");
const coupon_referral = returnKeyData<TermConditionItem>(
  "coupon_referral_policy"
);
</script>

<style scoped>
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
</style>
