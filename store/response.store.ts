import { defineStore } from "pinia";
import { Maybe } from "js-genie/utils/typescript";


type DurationType = "short" | "medium" | "long";

export type FormError = {
  error: string;
  key: string;
};



export type NotificationMessage = {
  message: string;
  type: string;
  duration?: DurationType;
};
export const useFormError = defineStore("formError", () => {
  const defaultError = () => ({ error: "", key: "" });

  const state = reactive<Record<string, FormError>>({
    default: defaultError(),
  });

  function reset(form = "default") {
    state[form] = defaultError();
  }

  function set(data: FormError, form = "default") {
    state[form] = data;
  }

  function clearAllErrors() {
    for (const key in state) {
      reset(key);
    }
  }

  function handleRequestError(
    e: any,
    scroll_id_prefix?: string,
    form = "default",
  ) {
    if (!e || !e.response) return;
    const data = e.response._data as Maybe<FormError>;
    if (data) {
      set(data, form);

      if (!scroll_id_prefix) return;

      // Scroll to input by ids
      const el = document.getElementById(`${scroll_id_prefix}-${data.key}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "end" });
        el.focus();
      }
    }
  }

  return { state, reset, set, clearAllErrors, handleRequestError };
});

export const notificationMessage = defineStore("notificationMessage", () => {
  const defaultMessage = () => ({ message: "", type: "success" });

  const state = reactive<Record<string, NotificationMessage>>({
    default: defaultMessage(),
  });

  function set(data: NotificationMessage, form = "default") {
    state[form] = data;
  }
});
