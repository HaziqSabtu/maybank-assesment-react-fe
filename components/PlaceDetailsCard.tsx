import { Place } from "@/types/Place";
import { MapPin, Phone, Star } from "lucide-react";
import React from "react";

type Props = {
    data: Place;
};

const PlaceDetailsCard = ({ data }: Props) => {
    return (
        <div className="absolute bottom-4 left-4 w-1/2">
            <div className="bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/20">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {data.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {data.address}
                </p>
                {data.phoneNumber && (
                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {data.phoneNumber}
                    </p>
                )}
                <div className="flex items-center justify-between">
                    {data.category && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            {data.category}
                        </span>
                    )}
                    {data.rating && (
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium text-gray-900">
                                {data.rating}
                            </span>
                            {data.ratingCount && (
                                <span className="text-xs text-gray-500">
                                    ({data.ratingCount.toLocaleString()})
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlaceDetailsCard;
