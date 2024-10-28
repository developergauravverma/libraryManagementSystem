import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./Slice/AuthanticationSclice";

export const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
