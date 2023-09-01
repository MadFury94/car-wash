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
          Register an account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="space-y-6 form">
          <div class="relative">
            <label>Email address</label>
            <input
              id="reg-email"
              v-model="form.email"
              type="email"
              autocomplete="email"
            />
            <FormErrorMessage field="email" />
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
                  id="reg-email"

                v-model="form.password"
                type="password"
                autocomplete="current-password"
              />
              <FormErrorMessage field="password" />

            </div>
          </div>

          <div>
            <button
              @click="register"
              type="submit"
              class="btn btn-primary w-full"
            >
              Register
            </button>
          </div>
          <p class="mt-10 text-center text-sm text-gray-500">
           Already have an account?
            {{ " " }}
            <NuxtLink
              :to="{ name: 'login' }"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useFormError } from "~/store/response.store";

definePageMeta({
  name: "register",
  layout: "default",
  middleware: "redirect-if-authenticated",
});

const form = reactive<{
  email: string;
  password: string;
}>({
  email: "boc@gmail.com",
  password: "123456",
});

const formError = useFormError();

async function register() {
  const setAuthRole = useCookie("auth-role");

  try {
    const res = await SR.post.api.register<{
      token: string;
      user: {
        email: string;
        name: string;
      };
    }>(form);

    localStorage.setItem("signUpMail", form.email);

/*     navigateTo({
      name: "all-features",
    }); */
  } catch (error: any) {
    console.log(error.data);
    formError.handleRequestError(error, "reg");
  }
}
</script>

<style scoped></style>
