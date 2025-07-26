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
