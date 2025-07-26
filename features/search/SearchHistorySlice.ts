import { PlaceSuggestion } from "@/types/Suggestion";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "@/store";

export const saveToHistory =
    (newItem: {
        id: string;
        data: PlaceSuggestion;
        timestamp?: number;
    }): AppThunk =>
    (dispatch, getState) => {
        const state = getState();
        const history = state.searchHistory.entries;

        const existingIndex = history.findIndex(
            (item) => item.id === newItem.id
        );

        let updatedHistory = [...history];

        if (existingIndex !== -1) {
            updatedHistory.splice(existingIndex, 1);
        }

        updatedHistory.unshift({
            id: newItem.id,
            data: newItem.data,
            timestamp: newItem.timestamp || Date.now(),
        });

        if (updatedHistory.length > 5) {
            updatedHistory = updatedHistory.slice(0, 5);
        }

        dispatch(SearchhistorySlice.actions.setSearchHistory(updatedHistory));

        try {
            localStorage.setItem("history", JSON.stringify(updatedHistory));
        } catch (e) {
            console.error("Failed to write history to cache", e);
        }
    };

export type SearchHistoryEntry = {
    id: string;
    data: PlaceSuggestion;
    timestamp: number;
};

interface SearchHistoryState {
    entries: SearchHistoryEntry[];
}

const initialState: SearchHistoryState = {
    entries: [],
};

const SearchhistorySlice = createSlice({
    name: "SearchHistory",
    initialState,
    reducers: {
        setSearchHistory: (
            state,
            action: PayloadAction<SearchHistoryEntry[]>
        ) => {
            state.entries = action.payload;
        },
    },
});

export const { setSearchHistory } = SearchhistorySlice.actions;
export default SearchhistorySlice.reducer;
