import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { catSliceReducer } from "../slice/catSlice";

export const store = configureStore({
  reducer: {
    cat: catSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const usedispatch: () => AppDispatch = useDispatch;
