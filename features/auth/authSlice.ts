import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store";

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
    await new Promise((r) => setTimeout(r, 1000));

    if (username === "admin" && password === "password") {
        return {
            username: "admin",
            token: "token",
        };
    }

    return thunkAPI.rejectWithValue("Invalid credentials");
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
