import { expectSaga } from "redux-saga-test-plan";

import { ToastOptions } from "../types";
import { logErrorToast, logErrorToasts } from "./LogErrorToastSaga";

/* Error */
const errorToastOptions: ToastOptions = {
  title: "It's time to panic!!!",
  status: "error",
};

const errorToastAction = {
  type: "test",
  payload: errorToastOptions,
};

/* Info */
const infoToastOptions: ToastOptions = {
  title: "It's time to panic!!!",
  status: "info",
};

const InfoToastAction = {
  type: "infoTest",
  payload: infoToastOptions,
};

test("saga calls analytics when it receives error toast", () => {
  return expectSaga(logErrorToasts, errorToastAction)
    .call(logErrorToast, "It's time to panic!!!")
    .run();
});

test("saga not calls analytics when it receives info toast", () => {
  return expectSaga(logErrorToasts, InfoToastAction)
    .not.call.fn(logErrorToast) // instead of  .not.call(logErrorToast, "It's time to panic!!!")
    .run();
});
