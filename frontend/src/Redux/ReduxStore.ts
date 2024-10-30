import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./Slice/AuthanticationSclice";
import modalReducer from "./Slice/ModalSlice";

export const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
