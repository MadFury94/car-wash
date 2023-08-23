import axios from "axios";
const baseUrl = "http://localhost:5620/api/";

type AxiosResponse<T> = [
  Ref<boolean>,
  () => Promise<void>,
  Ref<any>,
  Ref<any>,
];

export const $useFetchApi = axios.create({
  baseURL: "http://localhost:5620/api/",
  timeout: 3000,
});

export const $useAdminFetchApi = axios.create({
  baseURL: "http://localhost:5620/resources/",
  timeout: 3000,
});




export function useAxiosRequest<T>(
  endpoint: string,
  params: Record<string, any> = {}
): [Ref<boolean>, () => Promise<void>, Ref<T | null>, Ref<any>] {
  const data = ref<T | null>(null);
  const error = ref<any>(null);
  const pending = ref<boolean>(false);

  const getData = async () => {
    pending.value = true;
    try {
      const response: AxiosResponse<T> = await $useFetchApi.get(endpoint, {
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

  return [pending, getData, data as Ref<T | null>, error];
}


export function useAdminAxiosRequest<T>(
  endpoint: string,
  params: Record<string, any> = {}
): [Ref<boolean>, () => Promise<void>, Ref<T | null>, Ref<any>] {
  const data = ref<T | null>(null);
  const error = ref<any>(null);
  const pending = ref<boolean>(false);

  const getData = async () => {
    pending.value = true;
    try {
      const response: AxiosResponse<T> = await $useAdminFetchApi.get(endpoint, {
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

  return [pending, getData, data as Ref<T | null>, error];
}
  