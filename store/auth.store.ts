import { defineStore } from "pinia";

export function getCurrentUserToken() {
  return useCookie("auth-token");
}

export const useAuthStore = defineStore("authStore", () => {
  const authToken = getCurrentUserToken();

  if (process.client) {
    watch(
      authToken,
      (value) => {
        if (!value) {
          localStorage.removeItem("auth-token");
        } else {
          localStorage.setItem("auth-token", value);
        }
      },
      {
        immediate: true,
      },
    );
  }
  console.log("authToken", authToken.value);

  async function setCurrentUserToken(token: string) {
    if (!process.client) return;

    await $fetch("/api/login/", {
      method: "POST",
      body: {
        token,
      },
    });

    authToken.value = token;
    localStorage.setItem("auth-token", token);
  }

  const isLoggedIn = computed(() => {
    return !!authToken.value;
  });

  return {
    authToken,
    isLoggedIn,
    setCurrentUserToken,
  };
});
