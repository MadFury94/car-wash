import axios from "axios";

const baseUrl = "http://localhost:5620/api/";

export const   $useFetchApi = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});

export function useAxiosRequest(endpoint: any, params = {}) {
  const data = ref(null);
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

  return [pending, getData, data, error];
}
