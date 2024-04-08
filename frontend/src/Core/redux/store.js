import { configureStore } from "@reduxjs/toolkit"
import registrationSliceReducer, { registrationSliceName } from "./Auth"
import postsSliceReducer, { postsSliceName } from "./Feed/Feed";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    [registrationSliceName]: registrationSliceReducer,
    [postsSliceName]: postsSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

