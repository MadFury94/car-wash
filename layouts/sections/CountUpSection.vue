<template>
  <div class="lg:max-w-7xl mx-auto bg-secondary-500 rounded-2xl">
    <section class="text-center">
      <div ref="records" class="image py-5">
        <div class="flex grid-cols-4 flex-col lg:grid">
          <div class="" v-for="(record, index) in recordsList" :key="index">
            <div>
              <div class="py-5 text-white">
                <p class="">
                  <span class="text-4xl"><i :class="record.icon"></i></span>
                </p>
                <h1 class="text-3xl font-semibold">
                  <span
                    ref="counter"
                    class="counter"
                    :data-target="record.target"
                  ></span>
                </h1>
                <h5
                  class="whitespace-normal text-lg font-semibold uppercase text-primary-500"
                >
                  {{ record.text }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

const records = ref(null);
const recordsList = [
  {
    icon: "fas fa-users",
    target: "25",
    text: "Years",
  },
  {
    icon: "fas fa-award",
    target: "38000",
    text: "total cars washed",
  },
  {
    icon: "fas fa-user-shield",
    target: "17",
    text: "awards & recognition",
  },
  {
    icon: "fas fa-history",
    target: "140000",
    text: "trusted client",
  },
];
onMounted(() => {
  try {
    const record = records.value;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        const counter = document.querySelectorAll<HTMLElement>(".counter");

        counter.forEach((counter) => {
          counter.innerText = "0";

          const updateCounter = () => {
            const target = +counter.getAttribute("data-target")!;
            const c = +counter.innerText;

            const increment = target / 1000;

            if (c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`;
              setTimeout(updateCounter, 1);
            } else {
              counter.innerText = `${target}`;
            }
          };
          updateCounter();
        });
      } else {
        entries[0].target.classList.remove("animate");
      }
    });

    observer.observe(record!);
  } catch (e) {
    console.log(e);
  }
});
</script>

<style scoped>
.image {
  /* The image used */
  /* background-image: url("/home/business-people.jpg"); */

  /* Set a specific height */
  min-height: 200px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(1);

  /* add hue and saturation */
}
</style>
