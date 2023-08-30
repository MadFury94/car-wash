<template>
  <div class="">
    <div
      class="flex min-h-full lg:h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="space-y-6 form">
          <div class="relative">
            <label>Email address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              autocomplete="email"
            />
          </div>

          <div class="">
            <div class="flex justify-end">
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="relative">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >

              <input
                v-model="form.password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button @click="login" type="submit" class="btn btn-primary w-full">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { $useBaseApi } from "~/http";
import { useAuthStore } from "~/store/auth.store";

definePageMeta({
  name: "login",
  layout: "default",
});

const form = reactive<{
  email: string;
  password: string;
}>({
  email: "him@gmail.com",
  password: "123456",
});
const authStore = useAuthStore();

async function login() {
  const res = await SR.post.api.login<{
    token: string;
  }>(form);

  await authStore.setCurrentUserToken(res.token);


  alert("Login success");
}
</script>

<style scoped></style>
