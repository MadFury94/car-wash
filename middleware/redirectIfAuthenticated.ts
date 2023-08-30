import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();

   if (auth.isLoggedIn) {
        return navigateTo({
            name: "all-features",
        });
    }
});
