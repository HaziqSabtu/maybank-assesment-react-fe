import { RootState } from "@/store";
import { getPlaceDetails } from "@/temp/placedetails";
import { Place } from "@/types/Place";
import {
    PlaceDetailsResponse,
    placeDetailsResponseSchema,
} from "@/types/PlaceApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPlaceById = createAsyncThunk<Place, string>(
    "place/fetchById",
    async (id: string, thunkAPI) => {
        const json = await getPlaceDetails(id);
        const parseResult = placeDetailsResponseSchema.safeParse(json);
        if (!parseResult.success) {
            console.error(parseResult.error);
            return thunkAPI.rejectWithValue("Invalid response format");
        }

        return mapperToPlace(parseResult.data);
    }
);

interface PlaceState {
    data: Place | null;
    loading: boolean;
    error: string | null;
}

const initialState: PlaceState = {
    data: null,
    loading: false,
    error: null,
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
