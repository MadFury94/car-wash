import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();

    console.log(auth.isLoggedIn);

   if (auth.isLoggedIn) {
        return navigateTo({
            name: "all-features",
        });
    }
});
