import z from "zod";

export interface AuthUser {
    name: string;
    email: string;
    avatar: string | null;
    initials: string;
}

export const AuthCacheSchema = z.object({
    username: z.string(),
    token: z.string(),
});

export type AuthCache = z.infer<typeof AuthCacheSchema>;
