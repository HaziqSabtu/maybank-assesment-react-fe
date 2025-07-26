export interface Place {
    id: string;
    name: string;
    address: string;
    category: string | null;
    rating: number | null;
    ratingCount: number | null;
    latitude: number;
    longitude: number;
    phoneNumber: string | null;
}

export interface PlaceFavourite {
    id: string;
    name: string;
    address: string | null;
    category: string | null;
    createdAt: string;
}

export interface PlaceFavouritesPaginated {
    content: PlaceFavourite[];
    page: {
        size: number;
        number: number;
        totalElements: number;
        totalPages: number;
    };
}
