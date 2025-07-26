import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { AuthApiResponseSchema } from "@/types/AuthApi";

interface AuthState {
    isAuthenticated: boolean;
    username: string | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    username: null,
    token: null,
    loading: false,
    error: null,
};

export const login = createAsyncThunk<
    { username: string; token: string },
    { username: string; password: string },
    { state: RootState }
>("auth/login", async (credentials, thunkAPI) => {
    const { username, password } = credentials;

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (!backendUrl) {
        return thunkAPI.rejectWithValue("Backend URL not set");
    }

    const url = new URL("/auth/login", backendUrl);

    const response = await fetch(url.toString(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });

    if (!response.ok) {
        return thunkAPI.rejectWithValue("Invalid credentials");
    }

    const json = await response.json();
    const parseResult = AuthApiResponseSchema.safeParse(json);
    if (!parseResult.success) {
        console.error(parseResult.error);
        return thunkAPI.rejectWithValue("Invalid response format");
    }

    const { data } = parseResult;
    return data;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = null;
            state.token = null;
            state.error = null;
            state.loading = false;
        },
        setAuth: (
            state,
            action: { payload: { token: string; username: string } }
        ) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.token = action.payload.token;
                state.username = action.payload.username;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    (action.payload as string) ||
                    action.error.message ||
                    "Unknown login error";
            });
    },
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
