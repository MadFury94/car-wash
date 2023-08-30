import {useAuthStore} from "~/store/auth.store";

export function useCurrentUser() {
    const authStore = useAuthStore();
    const currentUser = computed(() => authStore.getCurrentUserData());

    return {
        currentUser
    };
}