/**
 * Declare global types here
 */

export {};

declare global {
    type SRF<T> = ReturnType<typeof useFetch<T>>;
}
