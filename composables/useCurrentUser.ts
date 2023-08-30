import { UserType } from "types/model";
import { useAuthStore } from "~/store/auth.store";

export function useCurrentUser():{ currentUser: Ref<UserType | null> } {
    const authStore = useAuthStore();
    const currentUser = computed(() => authStore.getCurrentUserData());

    return {
        currentUser
    };
}