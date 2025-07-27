"use client";

import { setAuth } from "@/features/auth/authSlice";
import { store } from "@/store";
import { AuthCacheSchema } from "@/types/AuthUser";
import { APIProvider } from "@vis.gl/react-google-maps";
import { Suspense, useEffect } from "react";
import { Provider } from "react-redux";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const auth = localStorage.getItem("auth");

        if (auth) {
            const parsed = JSON.parse(auth);
            const result = AuthCacheSchema.safeParse(parsed);

            if (result.success) {
                store.dispatch(setAuth(result.data));
            }
        }
    }, []);

    return (
        <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
            libraries={["marker"]}
        >
            (
            <Provider store={store}>
                <Suspense>{children}</Suspense>
            </Provider>
            );
        </APIProvider>
    );
}
