import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {

  const authRole = useCookie("auth-role");

  if (authRole.value !== "admin") {
    return navigateTo({
      name: "user-index",
    });
  }
});
