import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { PlaceFavourite } from "@/types/Place";
import Image from "next/image";

import placeholderImage from "@/assets/image/placeholder.svg";
import { Button } from "./ui/button";
import { Heart, MapPin } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
    isSelected: boolean;
    place: PlaceFavourite;
};

const FavouriteCard = ({ isSelected, place }: Props) => {
    const pathname = usePathname();
    const router = useRouter();

    function handleSelectCard(id: string) {
        const newUrl = pathname + "?id=" + id;
        router.push(newUrl, { scroll: false });
    }

    return (
        <Card
            className={`overflow-hidden pt-0 hover:shadow-md transition-all cursor-pointer ${
                isSelected ? "ring-2 ring-yellow-500 shadow-md" : ""
            }`}
            onClick={() => handleSelectCard(place.id)}
        >
            <div className="aspect-video relative h-56">
                <Image
                    src={placeholderImage}
                    alt={place.name}
                    fill
                    content=""
                    className="w-full h-full object-cover"
                />
                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-2 right-2 w-8 h-8"
                >
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                </Button>
                {isSelected && (
                    <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Selected
                    </div>
                )}
            </div>
            <CardHeader className="pb-2">
                <CardTitle className="text-lg">{place.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {place.address}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {place.category && (
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            {place.category}
                        </span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default FavouriteCard;
