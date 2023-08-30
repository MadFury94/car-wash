import { defineStore } from "pinia";


export function getCurrentUserData () {
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

  console.log(getCurrentUserData(),"-][]d");

  const currentUserData = reactive(getCurrentUserData());


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
      }
    );
  }

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

  function setCurrentUserData(data: any) {
    if (!process.client) return;
    localStorage.setItem("current-user", JSON.stringify(data));
    getCurrentUserData()
  }

  const isLoggedIn = computed(() => {
    return !!authToken.value;
  });

  return {
    authToken,
    isLoggedIn,
    setCurrentUserToken,
    setCurrentUserData,
    getCurrentUserData,
    currentUserData,
    
  };
});
