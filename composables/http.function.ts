export function getAuthIdFromLocalStorage() {
    if (process.client) {
        return localStorage.getItem("auth-token");
    }
    return null;
}
