import { useState, useRef, useEffect } from "react";
import useDebounce from "./useDebounce";
import { PlacePrediction } from "@/types/PlaceApi";
import { getSuggestions } from "@/temp/autocomplete";

type AutocompleteResult = {
    suggestions: PlacePrediction[];
    loading: boolean;
    error: Error | null;
};

export function useAutocomplete(input: string): AutocompleteResult {
    const [suggestions, setSuggestions] = useState<PlacePrediction[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const debouncedInput = useDebounce(input, 300);
    const requestIdRef = useRef(0);

    useEffect(() => {
        if (!debouncedInput.trim()) {
            setSuggestions([]);
            return;
        }

        const currentRequestId = ++requestIdRef.current;
        setLoading(true);
        setError(null);

        getSuggestions()
            .then((data) => {
                if (requestIdRef.current === currentRequestId) {
                    const suggestions = data.suggestions.map(
                        (suggestion) => suggestion.placePrediction
                    );
                    setSuggestions(suggestions);
                }
            })
            .catch((err) => {
                if (requestIdRef.current === currentRequestId) {
                    setError(err);
                }
            })
            .finally(() => {
                if (requestIdRef.current === currentRequestId) {
                    setLoading(false);
                }
            });
    }, [debouncedInput]);

    return { suggestions, loading, error };
}
