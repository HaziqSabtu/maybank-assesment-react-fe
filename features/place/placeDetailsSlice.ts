import { RootState } from "@/store";
import { getPlaceDetails } from "@/temp/placedetails";
import { Place } from "@/types/Place";
import {
    PlaceDetailsResponse,
    placeDetailsResponseSchema,
} from "@/types/PlaceApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const CACHE_DURATION_MS = 1000 * 60 * 5;

export const fetchPlaceById = createAsyncThunk<
    Place,
    string,
    { state: RootState }
>("place/fetchById", async (id: string, thunkAPI) => {
    const cached = thunkAPI.getState().placeDetails.cache[id];
    const now = Date.now();

    if (cached && now - cached.timestamp < CACHE_DURATION_MS) {
        return cached.data;
    }

    const json = await getPlaceDetails(id);
    const parseResult = placeDetailsResponseSchema.safeParse(json);
    if (!parseResult.success) {
        console.error(parseResult.error);
        return thunkAPI.rejectWithValue("Invalid response format");
    }

    return mapperToPlace(parseResult.data);
});

interface CachedPlace {
    data: Place;
    timestamp: number;
}

interface PlaceState {
    data: Place | null;
    loading: boolean;
    error: string | null;
    cache: Record<string, CachedPlace>;
}

const initialState: PlaceState = {
    data: null,
    loading: false,
    error: null,
    cache: {},
};

const placeSlice = createSlice({
    name: "place",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlaceById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPlaceById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;

                const id = action.payload.id;
                state.cache[id] = {
                    data: action.payload,
                    timestamp: Date.now(),
                };
            })
            .addCase(fetchPlaceById.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    (action.payload as string) ||
                    action.error.message ||
                    "Unknown error";
            });
    },
});

function mapperToPlace(place: PlaceDetailsResponse): Place {
    return {
        id: place.id,
        name: place.name,
        address: place.formattedAddress,
        category: place.primaryTypeDisplayName?.text || null,
        rating: place.rating || null,
        ratingCount: place.userRatingCount || null,
        latitude: place.location.latitude,
        longitude: place.location.longitude,
        phoneNumber: place.internationalPhoneNumber || null,
    };
}

export default placeSlice.reducer;
