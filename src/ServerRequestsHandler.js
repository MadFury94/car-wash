// @ts-ignore
import { useToast } from "vue-toastification";
import { getCurrentUserToken } from "~/store/auth.store";
const toast = useToast();

export default function handleRequest(url, args) {
  const baseURL = "http://localhost:5620";
  const { body, query, method, ...others } = args || {};
  const isAuth = getAuthIdFromLocalStorage() || getCurrentUserToken().value;

  const headers = {
    token: isAuth,
  };

  const fetchOptions = {
    // Adding interceptors
    onRequest({ request, options }) {
      // console.log("request routes ??", request);
    },
    onResponse({ request, response, options }) {
      const message = response._data.message;

      if (response._data.message) {
        toast.success(message, {
          timeout: 2000,
          icon: "fa-regular fa-circle-check text-green-500",
        });
      }
    },
    onRequestError({ request, options, error }) {
      console.log("request error", error);

      return Promise.reject(error.data);
    },
    onResponseError({ request, response, options }) {
      // return Promise.reject(response);
      // console.log("response error", response);
      return Promise.reject(response.data);
    },
  };

  if (args.method === "get") {
    return useFetch(url, {
      baseURL,
      params: query,
      headers,
      ...others,
      ...fetchOptions,
    });
  } else {
    return $fetch(url, {
      baseURL,
      body,
      params: query,
      method,
      headers,
      ...others,
      ...fetchOptions,
    });
  }
}
