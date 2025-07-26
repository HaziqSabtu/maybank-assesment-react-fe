import { MapPin, Search } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Input } from "./ui/input";
import { PlaceSuggestion } from "@/types/Suggestion";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/useSeachHistory";
import {
    saveToHistory,
    SearchHistoryEntry,
} from "@/features/search/SearchHistorySlice";
import { HistoryArraySchema } from "@/types/History";

type Props = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    isSearching: boolean;
    suggestions: PlaceSuggestion[];
};

const SearchBox = ({
    searchQuery,
    setSearchQuery,
    isSearching,
    suggestions,
}: Props) => {
    const dispatch = useAppDispatch();
    const searchHistory = useAppSelector(
        (state) => state.searchHistory.entries
    );
    const [showSuggestion, setShowSuggestion] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const history = loadFromCache();
        for (const entry of history) {
            dispatch(saveToHistory(entry));
        }
    }, [dispatch]);

    function handleSelectSuggestion(suggestion: PlaceSuggestion) {
        const suggestionId = suggestion.id;

        dispatch(saveToHistory({ id: suggestionId, data: suggestion }));

        const newUrl = pathname + "?id=" + suggestionId;
        router.push(newUrl);
    }

    const suggestionItems = useMemo(
        () => getSuggestionItem(suggestions, searchHistory),
        [suggestions, searchHistory]
    );

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                <Input
                    type="text"
                    placeholder="Search for places, restaurants, attractions..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowSuggestion(true);
                    }}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() =>
                        setTimeout(() => setShowSuggestion(false), 200)
                    }
                    className="pl-10 pr-4 py-3 text-lg"
                />

                {isSearching && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
                    </div>
                )}
                {showSuggestion && suggestionItems.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-20 max-h-60 overflow-y-auto">
                        {suggestionItems.map((suggestion, index) => (
                            <button
                                key={index}
                                className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-start gap-3 transition-colors"
                                onClick={() =>
                                    handleSelectSuggestion(suggestion)
                                }
                            >
                                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-gray-900 truncate">
                                        {suggestion.name}
                                    </div>
                                    <div className="text-sm text-gray-500 truncate">
                                        {suggestion.address}
                                    </div>
                                    <div className="text-xs text-blue-600 mt-1">
                                        {suggestion.id}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

function getSuggestionItem(
    suggestions: PlaceSuggestion[],
    searchHistory: SearchHistoryEntry[]
) {
    if (suggestions.length > 0) {
        return suggestions;
    }

    if (searchHistory.length > 0) {
        return searchHistory.map((entry) => entry.data);
    }

    return [];
}

function loadFromCache(): SearchHistoryEntry[] {
    try {
        const raw = localStorage.getItem("history");
        if (!raw) return [];

        const parsed = JSON.parse(raw);
        const result = HistoryArraySchema.safeParse(parsed);

        if (result.success) {
            return result.data;
        } else {
            console.warn("Invalid history cache, using empty array");
            return [];
        }
    } catch (e) {
        console.error("Failed to load history from cache", e);
        return [];
    }
}

export default SearchBox;
