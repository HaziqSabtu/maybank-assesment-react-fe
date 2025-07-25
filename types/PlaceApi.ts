export type PlacePredictionResponse = {
    suggestions: {
        placePrediction: PlacePrediction;
    }[];
};

export type PlacePrediction = {
    place: string;
    placeId: string;
    text: MatchedText;
    structuredFormat: {
        mainText: MatchedText;
        secondaryText: {
            text: string;
        };
    };
    types: string[];
};

export type MatchedText = {
    text: string;
    matches: {
        endOffset: number;
    }[];
};
