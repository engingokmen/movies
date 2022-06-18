import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { filmApi } from "../services/film";

export const store = configureStore({
  reducer: { [filmApi.reducerPath]: filmApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
