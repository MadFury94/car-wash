import axios from "axios";

const baseUrl = "http://localhost:5620/api/";

type AxiosRequestResult<T> = [
  Ref<boolean>,
  () => Promise<void>,
  Ref<any>,
  Ref<any>,
];

export const $useFetchApi = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});

export function useAxiosRequest<T>(
  endpoint: any,
  params = {}
): AxiosRequestResult<T> {
  const data = ref<T | null>(null);
  const error = ref(null);
  const pending = ref(false);

  const getData = async () => {
    pending.value = true;
    try {
      const response = await $useFetchApi.get(endpoint, {
        params: params,
      });
      data.value = response.data;
      error.value = null;
    } catch (err: any) {
      error.value = err;
      data.value = null;
    } finally {
      pending.value = false;
    }
  };

  return [pending, getData, data as Ref<T>, error];
}
