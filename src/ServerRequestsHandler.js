// @ts-ignore
import {getCurrentUserToken} from "~/store/auth.store";


export default function handleRequest(url, args) {
  const baseURL = "http://localhost:5620";
  const { body, query, method, ...others } = args || {};
  const isAuth = getAuthIdFromLocalStorage() || getCurrentUserToken().value

  const headers = {
    token: isAuth,
  };

  if (args.method === "get") {
    return useFetch(url, {
      baseURL,
      params: query,
      headers,
      ...others,
    });
  } else {
    return $fetch(url, {
      baseURL,
      body,
      params: query,
      method,
      headers,
      ...others,
    });
  }
}
