import { z } from "zod";

export const placeFavouriteSchema = z.object({
    id: z.string(),
    name: z.string(),
    address: z.string(),
    category: z.string().nullable(),
    createdAt: z.string(),
});

export const paginationSchema = z.object({
    size: z.number(),
    number: z.number(),
    totalElements: z.number(),
    totalPages: z.number(),
});

export const paginatedPlaceFavouritesResponseSchema = z.object({
    content: z.array(placeFavouriteSchema),
    page: paginationSchema,
});

export type PlaceFavourite = z.infer<typeof placeFavouriteSchema>;
export type PageInfo = z.infer<typeof paginationSchema>;
export type PaginatedPlaceFavouritesResponse = z.infer<
    typeof paginatedPlaceFavouritesResponseSchema
>;
