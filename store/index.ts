import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import placeDetailsReducer from "@/features/place/placeDetailsSlice";
import searchHistoryReducer from "@/features/search/SearchHistorySlice";
import authReducer from "@/features/auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        searchHistory: searchHistoryReducer,
        placeDetails: placeDetailsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
