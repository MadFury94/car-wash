<template>
  <div
    class="border-2 px-4 py-40 relative"
    :style="{
      'background-image': `url(https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/Our-Mission.jpg)`,
      'background-position': 'center center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <div class="overlay"></div>

    <div class="lg:grid grid-cols-2 text-wrapper">
      <div class="p-20">
        <div class="flex items-center">
          <div class="mb-2 text-secondary-500 font-semibold">
            <PillInfo title="LEARN ABOUT US" />
          </div>
        </div>

        <h2 class="heading3 sm:text-4xl">
          We Make Sure that Each Visits Include all Services
        </h2>
        <p
          class="mt-6 text-base md:text-lg leading-8 text-gray-800 md:text-left"
        ></p>

        <ButtonComponent title="Discover More" />
      </div>

      <div class="flex justify-center">
        <div>
          <TabGroup>
            <TabList
              class="flex flex-col md:flex-row px-4 justify-center gap-x-8 gap-y-4 space-x-1 rounded-xl p-1"
            >
              <Tab
                v-for="(tab, index) in tabData"
                as="template"
                :key="index"
                v-slot="{ selected }"
              >
                <button
                  :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                    ' ring-opacity-60  button  focus:outline-none ',
                    selected
                      ? ' border-b-4 button.border-b-4  shadow bg-secondary-500'
                      : 'text-white hover:bg-white/[0.12] hover:text-gray-400 border-2',
                  ]"
                >
                  <i :class="tab.icon"></i>
                  {{ tab.title }}
                </button>
              </Tab>
            </TabList>

            <TabPanels class="mt-2">
              <TabPanel
                v-for="(tab, idx) in tabData"
                :key="idx"
                :class="[
                  'rounded-xl  p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]"
              >
                <div class="">
                  <div class="flex justify-center">
                    <img class="rounded-md" :src="tab.image" alt="" />
                  </div>

                  <div class="col-span-2 py-2">
                    <h1 class="text-white">{{ tab.description }}</h1>

                    <ul>
                      <li
                        v-for="(item, index) in tab.listData"
                        :key="index"
                        class="relative py-3 flex gap-x-2"
                      >
                        <i
                          class="fa-solid fa-check text-white bg-secondary-500 rounded-xl p-1 text-center"
                        ></i>
                        <h3 class="text-sm font-medium leading-5 text-white">
                          {{ item }}
                        </h3>

                        <ul
                          class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
                        ></ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";

type TabDataTypes = {
  image: string;
  title: string;
  description: string;
  listData: string[];
  icon: string;
};

const tabData: TabDataTypes[] = [
  {
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/Our-Mission.jpg",
    title: "Our Mission",
    description:
      "1nMonocle ipsum dolor sit amet exclusive essential way uniforms, classic K-pop Tsutaya Boeing 787 ginza being vibrant Ginza Asia-Pacific non.Monocle ipsum dolor sit amet exclusive essential way uniforms, classic K-pop Tsutaya Boeing 787 ginza being vibrant Ginza Asia-Pacific non.",
    listData: [
      "1Dedicated to Save Lives",
      "1Electronically and Securely",
      "124/7 Available to Service",
      "1A thorough Cleaning of Dash",
    ],
    icon: "fa-duotone fa-rectangles-mixed",
  },
  {
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/Our-Vision.jpg",
    title: "Our Vision",
    description:
      "2MMonocle ipsum dolor sit amet exclusive essential way uniforms, classic K-pop Tsutaya Boeing 787 ginza being vibrant Ginza Asia-Pacific non.",
    listData: [
      "2Dedicated to Save Lives",
      "2Electronically and Securely",
      "224/7 Available to Service",
      "2A thorough Cleaning of Dash",
    ],
    icon: "fa-solid fa-check",
  },
  {
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/Our-Mission.jpg",
    title: "Values",
    description:
      "3MoMonocle ipsum dolor sit amet exclusive essential way uniforms, classic K-pop Tsutaya Boeing 787 ginza being vibrant Ginza Asia-Pacific non.",
    listData: [
      "3Dedicated to Save Lives",
      "3Electronically and Securely",
      "324/7 Available to Service",
      "A3 thorough Cleaning of Dash",
    ],
    icon: "fa-duotone fa-value-absolute",
  },
];

const categories = ref({
  Recent: [
    {
      id: 1,
      title: "Does drinking coffee make you smarter?",
      date: "5h ago",
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: "Is tech making coffee better or worse?",
      date: "Jan 7",
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: "The most innovative things happening in coffee",
      date: "Mar 19",
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
});
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust the opacity as needed */
  z-index: 1;
}

.text-wrapper {
  position: relative;
  z-index: 2;
}
button {
  transition: all 0.3s ease; /* This ensures a smooth color transition */
}
button.border-b-4 {
  transform: scale(1.05); /* This scales up the selected tab slightly */
  transition: all 0.3s ease, transform 0.2s ease-out; /* Combines color transition with a quick scale effect */
}
</style>
