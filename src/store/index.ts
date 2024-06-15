import { configureStore } from "@reduxjs/toolkit";
import beneficiaryReducer from "./slices/beneficiarySlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    beneficiaries: beneficiaryReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({}).concat();

    if (process.env.NODE_ENV !== "production") {
      middleware.push(logger);
    }

    return middleware;
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
