import { UserType } from "types/model";
import { useAuthStore } from "~/store/auth.store";

export function useCurrentUser():{ currentUser: Ref<UserType | null>, isAdmin: Ref<boolean> } {
    const authStore = useAuthStore();
    const currentUser = computed(() => authStore.getCurrentUserData());

    const isAdmin = computed(() => {
        return currentUser.value?.role === "admin";
    });

    return {
        currentUser,
        isAdmin,
    };
}