import z from "zod";
import { PlaceSuggestionSchema } from "./Suggestion";

export const HistoryArraySchema = z.array(
    z.object({
        id: z.string(),
        data: PlaceSuggestionSchema,
        timestamp: z.number(),
    })
);
