import { RootState } from "@/store";
import { PlaceFavouritesPaginated } from "@/types/Place";
import {
    PaginatedPlaceFavouritesResponse,
    paginatedPlaceFavouritesResponseSchema,
} from "@/types/PlaceFavouritesApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface PlaceFavouritesState extends PlaceFavouritesPaginated {
    loading: boolean;
    error: string | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

const initialState: PlaceFavouritesState = {
    content: [],
    page: {
        size: 0,
        number: 0,
        totalElements: 0,
        totalPages: 0,
    },
    loading: false,
    error: null,
    hasNextPage: false,
    hasPreviousPage: false,
};

export const fetchItems = createAsyncThunk<
    PlaceFavouritesPaginated,
    number,
    { rejectValue: string; state: RootState }
>("items/fetchItems", async (page, { rejectWithValue, getState }) => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (!backendUrl) {
        return rejectWithValue("Backend URL not set");
    }

    const token = getState().auth.token;
    if (!token) {
        console.error("Not authenticated");
        return rejectWithValue("Not authenticated");
    }

    const url = new URL("/places", backendUrl);
    url.searchParams.set("page", page.toString());

    const response = await fetch(url.toString(), {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        return rejectWithValue("Failed to fetch favourites");
    }

    const json = await response.json();

    const parseResult = paginatedPlaceFavouritesResponseSchema.safeParse(json);
    if (!parseResult.success) {
        console.error(parseResult.error);
        return rejectWithValue("Invalid response format");
    }

    return mapperToPaginated(parseResult.data);
});

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.loading = false;
                state.content = action.payload.content;
                state.page.size = action.payload.page.size;
                state.page.number = action.payload.page.number;
                state.page.totalElements = action.payload.page.totalElements;
                state.page.totalPages = action.payload.page.totalPages;
                state.hasNextPage =
                    action.payload.page.number <
                    action.payload.page.totalPages - 1;
                state.hasPreviousPage = action.payload.page.number > 0;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Unknown error";
            });
    },
});

function mapperToPaginated(
    data: PaginatedPlaceFavouritesResponse
): PlaceFavouritesPaginated {
    return {
        content: data.content,
        page: {
            size: data.page.size,
            number: data.page.number,
            totalElements: data.page.totalElements,
            totalPages: data.page.totalPages,
        },
    };
}

export default itemsSlice.reducer;
