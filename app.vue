<template>
  <Head>
    <Title>Sprynx | Car Wash</Title>

    <Link v-if="false" rel="icon" href="/logo.svg" />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
  </Head>


  <NotificationToast/>

  <NuxtLayout
    :transition="{
      name: 'bounce',
      mode: 'out-in',
    }"
  >
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
  <ClientOnly>
    <DebugDock />
  </ClientOnly>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth.store";
import NotificationToast from "~/components/commons/NotificationToast.vue";

let _token: string | null = null;

/*
const { data } = await useFetch("/api/v1", {
  method: "GET",
  headers: {
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWM5ZWE5OTUyZDAwMzc5NWVkYTBkMSIsImlhdCI6MTY5MzMxMzQzMywiZXhwIjoxNjkzNTcyNjMzfQ.torXdld7CRRfN1czknmehpU5LSlSNkdEKWzjizuunvk"
  },
});
*/

const authStore = useAuthStore();
</script>
