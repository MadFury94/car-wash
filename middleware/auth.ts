import {useAuthStore} from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
/*  function getAuthIdFromLocalStorage() {
    if (!process.client) return false;
    const authId = localStorage.getItem("auth-id");

  }
  const isAuth = getAuthIdFromLocalStorage();

  console.log("to", isAuth);

  console.log("auth", !!isAuth);

  if(false) {
    return navigateTo("/auth/login");
  }*/


  const auth = useAuthStore()

  if(!auth.isLoggedIn){
    return navigateTo("/auth/login");
  }

});
