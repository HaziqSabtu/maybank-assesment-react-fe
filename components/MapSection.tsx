import { Heart, MapPin, Star } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

import MapImage from "@/assets/image/map.webp";
import Image from "next/image";
import { Place } from "@/types/Place";

type Props = {
    selectedPlace: Place | null;
};

const MapSection = ({ selectedPlace }: Props) => {
    if (!selectedPlace) {
        return (
            <>
                <MapHeader selectedPlace={selectedPlace} />
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

    return (
        <>
            <MapHeader selectedPlace={selectedPlace} />
            <div className="w-full h-96 bg-gray-100 rounded-lg border overflow-hidden relative">
                <Image
                    src={MapImage}
                    alt={selectedPlace.name}
                    className="w-full h-full object-cover"
                />
                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 w-12 h-12 shadow-lg hover:shadow-xl transition-shadow"
                >
                    <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                </Button>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="text-white">
                        <h3 className="text-xl font-bold mb-1">
                            {selectedPlace.name}
                        </h3>
                        <p className="text-sm opacity-90 mb-2 flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {selectedPlace.address}
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
                                {selectedPlace.category}
                            </span>
                            {selectedPlace.rating && (
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium">
                                        {selectedPlace.rating}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const MapHeader = ({ selectedPlace }: Props) => {
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
