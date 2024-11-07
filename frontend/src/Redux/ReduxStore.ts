import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./Slice/AuthanticationSclice";
import modalReducer from "./Slice/ModalSlice";
import BookReducer from "./Slice/BookSlice";

export const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
    modal: modalReducer,
    book: BookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
