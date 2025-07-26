import { Heart, MapPin } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";

import MapImage from "@/assets/image/map_light.webp";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
    usePlaceDetailsDispatch,
    usePlaceDetailsSelector,
} from "@/hooks/usePlaceDetails";
import { fetchPlaceById } from "@/features/place/placeDetailsSlice";
import { Place } from "@/types/Place";
import PlaceDetailsSkeletonCard from "./PlaceDetailsSkeletonCard";
import PlaceDetailsCard from "./PlaceDetailsCard";

const MapSection = () => {
    const searchParams = useSearchParams();
    const placeId = searchParams.get("id");

    const dispatch = usePlaceDetailsDispatch();
    const { data, loading, error } = usePlaceDetailsSelector(
        (state) => state.placeDetails
    );

    useEffect(() => {
        if (!placeId) {
            return;
        }

        dispatch(fetchPlaceById(placeId));
    }, [placeId, dispatch]);

    if (!placeId) {
        return (
            <>
                <MapHeader selectedPlace={data} />
                <div className="w-full h-96 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                        <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-lg font-medium">
                            Select a place to view on map
                        </p>
                        <p className="text-sm">
                            Click on a favorite place or search suggestion
                        </p>
                    </div>
                </div>
            </>
        );
    }

    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No data found</p>;

    return (
        <>
            <MapHeader selectedPlace={data} />
            <div className="w-full h-96 bg-gray-100 rounded-lg border overflow-hidden relative">
                <Image
                    src={MapImage}
                    alt={data.name}
                    className="w-full h-full object-cover"
                />
                {!loading && (
                    <Button
                        size="icon"
                        variant="secondary"
                        className="absolute top-4 right-4 w-12 h-12 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                    </Button>
                )}
                {loading ? (
                    <PlaceDetailsSkeletonCard />
                ) : (
                    <PlaceDetailsCard data={data} />
                )}
            </div>
        </>
    );
};

const MapHeader = ({ selectedPlace }: { selectedPlace: Place | null }) => {
    return (
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Map View
            {selectedPlace && (
                <span className="text-sm font-normal text-gray-500">
                    - {selectedPlace.name}
                </span>
            )}
        </h2>
    );
};

export default MapSection;
