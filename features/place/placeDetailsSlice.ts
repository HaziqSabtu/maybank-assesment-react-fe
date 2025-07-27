import { RootState } from "@/store";
import { Place } from "@/types/Place";
import {
    PlaceDetailsResponse,
    placeDetailsResponseSchema,
} from "@/types/PlaceApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const CACHE_DURATION_MS = 1000 * 60 * 5;

export const fetchPlaceById = createAsyncThunk<
    PlaceWithLike,
    string,
    { state: RootState }
>("place/fetchById", async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    const cached = state.placeDetails.cache[id];
    const now = Date.now();

    try {
        if (cached && now - cached.timestamp < CACHE_DURATION_MS) {
            const isLiked = await getIsPlaceLiked(id, token);
            return { ...cached.data, isLiked };
        }

        const [placeDetails, isLiked] = await Promise.all([
            getPlaceDetailsData(id),
            getIsPlaceLiked(id, token),
        ]);

        return { ...placeDetails, isLiked };
    } catch (error) {
        console.error("Failed to fetch place or isLiked:", error);
        return thunkAPI.rejectWithValue("Failed to fetch place");
    }
});

export const togglePlaceFavourite = createAsyncThunk<
    { placeId: string; isFavourite: boolean },
    { place: Place; liked: boolean },
    { state: RootState }
>("place/toggleFavourite", async ({ place, liked }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    try {
        const url = `${backendUrl}/places`;
        const method = !liked ? "POST" : "DELETE";

        const body = JSON.stringify({
            id: place.id,
            name: place.name,
            address: place.address,
            category: place.category,
        });

        const response = await fetch(url, {
            method,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body,
        });

        if (!response.ok) {
            throw new Error("Failed to update favourite");
        }

        return { placeId: place.id, isFavourite: !liked };
    } catch (error) {
        console.error("Failed to update favourite:", error);
        return thunkAPI.rejectWithValue("Unable to update favourite");
    }
});

type PlaceWithLike = Place & { isLiked: boolean };

interface CachedPlace {
    data: Place;
    timestamp: number;
}

interface PlaceState {
    data: PlaceWithLike | null;
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
            })
            .addCase(togglePlaceFavourite.fulfilled, (state, action) => {
                const { placeId, isFavourite } = action.payload;
                const cached = state.cache[placeId];

                if (!cached) {
                    return;
                }

                state.data = {
                    ...cached.data,
                    isLiked: isFavourite,
                };
            });
    },
});

function mapperToPlace(place: PlaceDetailsResponse): Place {
    return {
        id: place.id,
        name: place.displayName.text,
        address: place.formattedAddress,
        category: place.primaryTypeDisplayName?.text || null,
        rating: place.rating || null,
        ratingCount: place.userRatingCount || null,
        latitude: place.location.latitude,
        longitude: place.location.longitude,
        phoneNumber: place.internationalPhoneNumber || null,
    };
}

async function getIsPlaceLiked(
    id: string,
    token: string | null
): Promise<boolean> {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl || !token) return false;

    try {
        const url = new URL(`/places/${id}`, backendUrl);
        const response = await fetch(url.toString(), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.ok;
    } catch (e) {
        console.error(e);
        return false;
    }
}

async function getPlaceDetailsData(id: string): Promise<Place> {
    const placeApiUrl = `
        https://places.googleapis.com/v1/places/${id}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
    `;

    const headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
        "X-Goog-FieldMask":
            "name,id,displayName,primaryTypeDisplayName,internationalPhoneNumber,formattedAddress,rating,userRatingCount,location",
    };

    const response = await fetch(placeApiUrl, {
        method: "GET",
        headers,
    });

    if (!response.ok) {
        throw new Error("Failed to fetch place details");
    }

    const json = await response.json();

    const parseResult = placeDetailsResponseSchema.safeParse(json);
    if (!parseResult.success) {
        console.error(parseResult.error);
        throw new Error("Invalid response format");
    }

    return mapperToPlace(parseResult.data);
}

export default placeSlice.reducer;
