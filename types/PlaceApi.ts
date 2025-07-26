import { z } from "zod";

export const MatchedTextSchema = z.object({
    text: z.string(),
    matches: z.array(
        z.object({
            startOffset: z.number().optional(),
            endOffset: z.number().optional(),
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
            matches: z
                .array(
                    z.object({
                        endOffset: z.number().optional(),
                    })
                )
                .optional(),
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

export const placeDetailsResponseSchema = z.object({
    name: z.string(),
    id: z.string(),
    internationalPhoneNumber: z.string().optional(),
    formattedAddress: z.string(),
    location: z.object({
        latitude: z.number(),
        longitude: z.number(),
    }),
    rating: z.number().optional(),
    userRatingCount: z.number().int().optional(),
    displayName: z.object({
        text: z.string(),
        languageCode: z.string(),
    }),
    primaryTypeDisplayName: z
        .object({
            text: z.string(),
            languageCode: z.string(),
        })
        .optional(),
});

export type PlacePrediction = z.infer<typeof PlacePredictionSchema>;
export type PlacePredictionResponse = z.infer<
    typeof PlacePredictionResponseSchema
>;
export type PlaceDetailsResponse = z.infer<typeof placeDetailsResponseSchema>;
