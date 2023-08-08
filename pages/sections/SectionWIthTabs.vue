<template>
  <div
    class="border-2 p-4 relative"
    :style="{
      'background-image': `url(https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/Our-Mission.jpg)`,
      'background-position': 'center center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <div class="overlay"></div>

    <div class="lg:grid grid-cols-2 items-start text-wrapper">
      <div>
        <div class="text-3xl text-white">
          <div>LEARN ABOUT US</div>
          <div>We Make Sure that Each Visits Include all Services</div>
        </div>

        <button class="bg-secondary-500 p-2 roun">Discover More</button>
        <!-- <ButtonComponent /> -->
      </div>

      <div class="flex justify-center">
        <div>
          <TabGroup>
            <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab
                v-for="(tab, index) in tabData"
                as="template"
                :key="index"
                v-slot="{ selected }"
              >
                <button
                  :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                  ]"
                >
                  {{ tab.title }}
                </button>
              </Tab>
            </TabList>

            <TabPanels class="mt-2">
              <TabPanel
                v-for="(tab, idx) in tabData"
                :key="idx"
                :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]"
              >
                <div class="flex flex-col">
                  <div class="flex justify-center">
                    <img class="w-96" :src="tab.image" alt="" />
                  </div>

                  <div>
                    <h1>{{ tab.description }}</h1>

                    <ul>
                      <li
                        v-for="(item, index) in tab.listData"
                        :key="index"
                        class="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 class="text-sm font-medium leading-5">
                          {{ item }}
                        </h3>

                        <ul
                          class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
                        ></ul>

                        <a
                          href="#"
                          :class="[
                            'absolute inset-0 rounded-md',
                            'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                          ]"
                        />
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
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  z-index: 1;
}

.text-wrapper {
  position: relative;
  z-index: 2;
}
</style>
