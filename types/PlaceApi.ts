import { z } from "zod";

export const MatchedTextSchema = z.object({
    text: z.string(),
    matches: z.array(
        z.object({
            endOffset: z.number(),
        })
    ),
});

export const PlacePredictionSchema = z.object({
    place: z.string(),
    placeId: z.string(),
    text: MatchedTextSchema,
    structuredFormat: z.object({
        mainText: MatchedTextSchema,
        secondaryText: z.object({
            text: z.string(),
        }),
    }),
    types: z.array(z.string()),
});

export const PlacePredictionResponseSchema = z.object({
    suggestions: z.array(
        z.object({
            placePrediction: PlacePredictionSchema,
        })
    ),
});

export type PlacePrediction = z.infer<typeof PlacePredictionSchema>;
export type PlacePredictionResponse = z.infer<
    typeof PlacePredictionResponseSchema
>;
