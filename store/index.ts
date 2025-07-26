import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import placeDetailsReducer from "@/features/place/placeDetailsSlice";
import searchHistoryReducer from "@/features/search/SearchHistorySlice";

export const store = configureStore({
    reducer: {
        searchHistory: searchHistoryReducer,
        placeDetails: placeDetailsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
