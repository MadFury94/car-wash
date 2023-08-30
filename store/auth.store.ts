import { defineStore } from "pinia";

export function getCurrentUserData() {
  if (!process.client) return;

  const data = localStorage.getItem("current-user") || null;

  if (data) {
    return JSON.parse(data);
  }

  return null;
}

export function getCurrentUserToken() {
  return useCookie("auth-token");
}

export const useAuthStore = defineStore("authStore", () => {
  const authToken = getCurrentUserToken();

  const currentUserData = getCurrentUserData();

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

  async function setCurrentUserToken(token: string, data: any) {
    if (!process.client) return;

    await $fetch("/api/login/", {
      method: "POST",
      body: {
        token,
        data,
      },
    });

    authToken.value = token;

    localStorage.setItem("auth-token", token);
    localStorage.setItem("current-user", JSON.stringify(data));
  }

  const isLoggedIn = computed(() => {
    return !!authToken.value;
  });


  async function logout() {
    if (!process.client) return;

    authToken.value = null;
    localStorage.removeItem("auth-token");
    localStorage.removeItem("current-user");


  }

  return {
    authToken,
    isLoggedIn,
    setCurrentUserToken,
    getCurrentUserData,
    currentUserData,
    logout,
  };
});
