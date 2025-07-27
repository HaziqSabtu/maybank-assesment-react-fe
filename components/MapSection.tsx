import { Heart, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

import MapImage from "@/assets/image/map_light.webp";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
    fetchPlaceById,
    togglePlaceFavourite,
} from "@/features/place/placeDetailsSlice";
import { Place } from "@/types/Place";
import PlaceDetailsSkeletonCard from "./PlaceDetailsSkeletonCard";
import PlaceDetailsCard from "./PlaceDetailsCard";
import SignInModal from "./SignInModal";
import { refetchCurrentPage } from "@/features/place/placeFavouritePageSlice";

const MapSection = () => {
    const searchParams = useSearchParams();
    const placeId = searchParams.get("id");

    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(
        (state) => state.placeDetails
    );
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    const [showSignInModal, setShowSignInModal] = useState(false);

    useEffect(() => {
        if (!placeId) {
            return;
        }

        dispatch(fetchPlaceById(placeId));
    }, [placeId, dispatch]);

    useEffect(() => {
        dispatch(refetchCurrentPage());
    }, [data?.isLiked, dispatch]);

    // TODO: better handling in this area
    if (!placeId || !data) {
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

    function handleUnauthenticatedLikedButtonClick() {
        setShowSignInModal(true);
    }

    function handleAuthenticatedLikedButtonClick() {
        if (!data) return;
        dispatch(togglePlaceFavourite({ place: data, liked: data.isLiked }));
    }

    if (error) return <p>Error: {error}</p>;

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
                    <>
                        {isAuthenticated ? (
                            <AuthenticatedLikedButton
                                isLiked={data.isLiked}
                                onClick={handleAuthenticatedLikedButtonClick}
                            />
                        ) : (
                            <UnauthenticatedLikedButton
                                onClick={handleUnauthenticatedLikedButtonClick}
                            />
                        )}
                    </>
                )}
                {loading ? (
                    <PlaceDetailsSkeletonCard />
                ) : (
                    <PlaceDetailsCard data={data} />
                )}
            </div>
            <SignInModal
                isOpen={showSignInModal}
                onClose={() => setShowSignInModal(false)}
            />
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

const UnauthenticatedLikedButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <Button
            size="icon"
            variant="secondary"
            className="absolute top-4 right-4 w-12 h-12 shadow-lg hover:shadow-xl transition-shadow"
            onClick={onClick}
        >
            <Heart className="w-6 h-6 fill-gray-400 text-gray-400" />
        </Button>
    );
};

const AuthenticatedLikedButton = ({
    isLiked,
    onClick,
}: {
    isLiked: boolean;
    onClick: () => void;
}) => {
    return (
        <Button
            size="icon"
            variant="secondary"
            className="absolute top-4 right-4 w-12 h-12 shadow-lg hover:shadow-xl transition-shadow"
            onClick={onClick}
        >
            {isLiked ? (
                <Heart className="w-6 h-6 fill-red-500 text-red-500" />
            ) : (
                <Heart className="w-6 h-6 fill-gray-400 text-gray-400" />
            )}
        </Button>
    );
};

export default MapSection;
