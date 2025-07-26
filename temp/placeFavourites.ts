import { PaginatedPlaceFavouritesResponse } from "@/types/PlaceFavouritesApi";

export const data: PaginatedPlaceFavouritesResponse = {
    content: [
        {
            id: "ChIJ1WJ2bOi8yjERxbofruAstSQ",
            name: "Kuala Kangsar",
            address: "Kuala Kangsar, Perak, Malaysia",
            category: null,
            createdAt: "2025-07-26T10:05:31.1330466Z",
        },
        {
            id: "ChIJ5-rvAcdJzDERfSgcL1uO2fQ",
            name: "Kuala Lumpur",
            address:
                "Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
            category: null,
            createdAt: "2025-07-26T10:05:31.1330466Z",
        },
        {
            id: "ChIJL4PyKDOLzDERHYHAzC9YBdw",
            name: "Kuala Selangor",
            address: "Kuala Selangor, Selangor, Malaysia",
            category: null,
            createdAt: "2025-07-26T10:05:31.1330466Z",
        },
        {
            id: "ChIJL4Zul54JtzERkiQjy4XuwBs",
            name: "Kuala Terengganu",
            address: "Kuala Terengganu, Terengganu, Malaysia",
            category: null,
            createdAt: "2025-07-26T10:05:31.1330466Z",
        },
        {
            id: "ChIJ0-cIvSo2zDERmWzYQPUfLiM",
            name: "Federal Territory of Kuala Lumpur",
            address:
                "Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
            category: null,
            createdAt: "2025-07-26T10:05:31.1289525Z",
        },
        {
            id: "ChIJd0b0EWvxaS4R8Hb9SpKttuA",
            name: "Komplek Gelora Bung Karno",
            address:
                "Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270, Indonesia",
            category: "Sports Complex",
            createdAt: "2025-07-26T10:05:31.1289525Z",
        },
    ],
    page: {
        size: 6,
        number: 0,
        totalElements: 21,
        totalPages: 4,
    },
};

export async function getPlaceFavourites() {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));

    return data;
}
