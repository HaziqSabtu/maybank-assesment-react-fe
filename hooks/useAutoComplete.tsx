import { useState, useRef, useEffect } from "react";
import useDebounce from "./useDebounce";
import {
    PlacePrediction,
    PlacePredictionResponseSchema,
} from "@/types/PlaceApi";
import { PlaceSuggestion } from "@/types/Suggestion";

type AutocompleteResult = {
    suggestions: PlaceSuggestion[];
    loading: boolean;
    error: Error | null;
};

export function useAutocomplete(input: string): AutocompleteResult {
    const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
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

        const url = "https://places.googleapis.com/v1/places:autocomplete";

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append(
            "X-Goog-API-Key",
            process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string
        );

        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({
                input: debouncedInput,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                const parsed = PlacePredictionResponseSchema.safeParse(data);

                if (!parsed.success) {
                    throw parsed.error;
                }

                if (requestIdRef.current === currentRequestId) {
                    const suggestions = parsed.data.suggestions.map((s) =>
                        mapper(s.placePrediction)
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

function mapper(suggestion: PlacePrediction): PlaceSuggestion {
    return {
        name: suggestion.structuredFormat.mainText.text,
        address: suggestion.structuredFormat.secondaryText.text,
        id: suggestion.placeId,
    };
}
