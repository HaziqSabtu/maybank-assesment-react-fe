import z from "zod";

export const PlaceSuggestionSchema = z.object({
    name: z.string(),
    address: z.string(),
    id: z.string(),
});

export type PlaceSuggestion = z.infer<typeof PlaceSuggestionSchema>;
