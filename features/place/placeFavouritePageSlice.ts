import { getPlaceFavourites } from "@/temp/placeFavourites";
import { PlaceFavouritesPaginated } from "@/types/Place";
import {
    PaginatedPlaceFavouritesResponse,
    paginatedPlaceFavouritesResponseSchema,
} from "@/types/PlaceFavouritesApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface PlaceFavouritesState extends PlaceFavouritesPaginated {
    loading: boolean;
    error: string | null;
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
};

export const fetchItems = createAsyncThunk<
    PlaceFavouritesPaginated,
    number,
    { rejectValue: string }
>("items/fetchItems", async (page, { rejectWithValue }) => {
    const data = await getPlaceFavourites();

    const parseResult = paginatedPlaceFavouritesResponseSchema.safeParse(data);
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
