import { configureStore } from "@reduxjs/toolkit";
import placeDetailsReducer from "@/features/place/placeDetailsSlice";

export const store = configureStore({
    reducer: {
        placeDetails: placeDetailsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
