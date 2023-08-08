<template>
  <div class="border-2 bg-gray-500 p-4">
    <div class="lg:grid grid-cols-2">
      <div>
        <div>
          <div>LEARN ABOUT US</div>
          <div>We Make Sure that Each Visits Include all Services</div>
        </div>

        <button>Discover More</button>
      </div>

      <div class="flex justify-center ">
     <div>
        <div class="flex justify-between">
          <div>Tab 1</div>
          <div>Tab 2</div>
          <div>Tab 3</div>
        </div>

        <img
          class="w-96 "
          src="https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/09/blog_3.jpg"
          alt=""
        />

     </div>
      </div>

      <div class="py-8">

        <p class="">
          Monocle ipsum dolor sit amet exclusive essential way uniforms, classic
          K-pop Tsutaya Boeing 787 ginza being vibrant Ginza Asia-Pacific non.
        </p>

        <ul class="py-4">
          <li>Dedicated to Save Lives</li>
          <li>Electronically and Securely</li>
          <li>24/7 Available to Service</li>
          <li>A thorough Cleaning of Dash</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    description: "Monocle ipsum do",
    listData: [
      "Dedicated to Save Lives",
      "Electronically and Securely",
      "24/7 Available to Service",
      "A thorough Cleaning of Dash",
    ],
  },
  {
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/Our-Vision.jpg",
    title: "Our Vision",
    description: "Monocle ipsum do",
    listData: [
      "Dedicated to Save Lives",
      "Electronically and Securely",
      "24/7 Available to Service",
      "A thorough Cleaning of Dash",
    ],
  },
  {
    image:
      "https://demo.ovatheme.com/mistercar/wp-content/uploads/2020/11/Our-Mission.jpg",
    title: "Values",
    description: "Monocle ipsum do",
    listData: [
      "Dedicated to Save Lives",
      "Electronically and Securely",
      "24/7 Available to Service",
      "A thorough Cleaning of Dash",
    ],
  },
];
</script>

<style scoped></style>
