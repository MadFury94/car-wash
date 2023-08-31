import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  const authRole = useCookie("auth-role");

  console.log("auth role - isAdministrator", authRole.value);
  console.log("auth logged", auth.isLoggedIn);

  if (!auth.isLoggedIn) {
    return navigateTo("/auth/login");
  }

  if (authRole.value !== "admin") {
    // return navigateTo("/");
    console.log("not admin");
  }

/*  if (!auth.isAdministrator) {
    return navigateTo({
      name: "index",
    });
  }*/
});
