import React from "react";

const PlaceDetailsSkeletonCard = () => {
    return (
        <div className="absolute bottom-4 left-4 w-1/2">
            <div className="bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/20">
                <div className="animate-pulse">
                    <div className="h-5 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
                    <div className="flex items-center justify-between">
                        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetailsSkeletonCard;
