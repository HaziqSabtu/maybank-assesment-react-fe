import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

const FavouriteSkeletonCard = () => {
    return (
        <Card className="overflow-hidden pt-0">
            <div className="aspect-video relative bg-gray-200 animate-pulse h-56">
                <div className="absolute top-2 right-2 w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
            <CardHeader className="pb-2">
                <div className="space-y-2">
                    <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
                </div>
            </CardContent>
        </Card>
    );
};

export default FavouriteSkeletonCard;
