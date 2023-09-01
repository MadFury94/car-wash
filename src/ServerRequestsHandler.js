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
      // Modify request or options here if needed
      // For example, you can add additional headers or modify the request body

      console.log("request routes ??", request);
    },
    onResponse({ request, response, options }) {
      const message = response._data.message;
      // Handle the response or modify it here
      // For example, you can check if the response status is 401 (Unauthorized) and redirect the user to a login page
      toast.success(response._data.message, {
        timeout: 2000,
      });
    },
    onRequestError({ request, options, error }) {
      // Handle request errors here
      // For example, you can log the error or show a notification to the user

      console.log("request error", error);
    },
    onResponseError({ request, response, options }) {
      // Handle response errors here
      // For example, you can log the error or show a notification to the user

      console.log("response error", response);
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
