import { configureStore } from "@reduxjs/toolkit"
import registrationSliceReducer, { registrationSliceName } from "./Auth"
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    [registrationSliceName]: registrationSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

