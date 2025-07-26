import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";

export const usePlaceDetailsDispatch = () => useDispatch<AppDispatch>();
export const usePlaceDetailsSelector: TypedUseSelectorHook<RootState> =
    useSelector;
