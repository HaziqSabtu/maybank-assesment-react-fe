import { z } from "zod";

export const AuthApiResponseSchema = z.object({
    token: z.string(),
    username: z.string(),
    id: z.string(),
});

export type AuthApiResponse = z.infer<typeof AuthApiResponseSchema>;
