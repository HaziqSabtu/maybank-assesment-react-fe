import { PlaceDetailsResponse } from "@/types/PlaceApi";
import { data as autoCompleteData } from "./autocomplete";

const data = [
    {
        name: "places/ChIJLf8zWebR5zsRkVxdjd6rbKI",
        id: "ChIJLf8zWebR5zsRkVxdjd6rbKI",
        internationalPhoneNumber: "+91 22 2285 1876",
        formattedAddress:
            "Soona Mahal, 143, Marine Dr, Churchgate, Mumbai, Maharashtra 400020, India",
        location: {
            latitude: 18.9333915,
            longitude: 72.823882099999992,
        },
        rating: 4.2,
        userRatingCount: 25989,
        displayName: {
            text: "Pizza By The Bay",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Italian Restaurant",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJ2ZVFCzIXrjsRU64njYB04RE",
        id: "ChIJ2ZVFCzIXrjsRU64njYB04RE",
        internationalPhoneNumber: "+91 89519 40444",
        formattedAddress:
            "No.3275/A, 12th Main Rd, HAL 2nd Stage, Ward 72, Domlur, Bengaluru, Karnataka 560038, India",
        location: {
            latitude: 12.970002,
            longitude: 77.6361044,
        },
        rating: 4.8,
        userRatingCount: 5062,
        displayName: {
            text: "Pizza 4P's Indiranagar",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Italian Restaurant",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJW3BnIA6pQjQRR5BYohped7A",
        id: "ChIJW3BnIA6pQjQRR5BYohped7A",
        formattedAddress:
            "235, Taiwan, New Taipei City, Zhonghe District, Shuiyuan Rd, 102號光華街口萊爾富對面",
        location: {
            latitude: 25.0035243,
            longitude: 121.50593500000001,
        },
        rating: 4.4,
        userRatingCount: 351,
        displayName: {
            text: "Pizza power",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Pizza Restaurant",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJC-nWiTYvdTERGMJvRSoZ2f4",
        id: "ChIJC-nWiTYvdTERGMJvRSoZ2f4",
        internationalPhoneNumber: "+84 28 3622 0500",
        formattedAddress:
            "151b Hai Bà Trưng, Phường 6, Quận 3, Hồ Chí Minh 700000, Vietnam",
        location: {
            latitude: 10.7830429,
            longitude: 106.69697269999999,
        },
        rating: 4.9,
        userRatingCount: 16772,
        displayName: {
            text: "Pizza 4P's Hai Ba Trung",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Pizza Restaurant",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJq4DSNt0_K4gR5BFOlAqpcb8",
        id: "ChIJq4DSNt0_K4gR5BFOlAqpcb8",
        internationalPhoneNumber: "+1 905-203-0011",
        formattedAddress:
            "7910 Hurontario St #18, Brampton, ON L6Y 0P6, Canada",
        location: {
            latitude: 43.6636437,
            longitude: -79.7321441,
        },
        rating: 4.8,
        userRatingCount: 1059,
        displayName: {
            text: "Pizza CraviN (Brampton)",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Pizza Restaurant",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJsxSZsJDS3TsRXCEonV2EB8s",
        id: "ChIJsxSZsJDS3TsRXCEonV2EB8s",
        formattedAddress: "Nashik, Maharashtra, India",
        location: {
            latitude: 19.9993217,
            longitude: 73.790018800000013,
        },
        displayName: {
            text: "Nashik",
            languageCode: "en",
        },
    },
    {
        name: "places/ChIJi9nuRgiYHkcR421AlKwpIfA",
        id: "ChIJi9nuRgiYHkcR421AlKwpIfA",
        formattedAddress: "05-190 Nasielsk, Poland",
        location: {
            latitude: 52.589909999999996,
            longitude: 20.80568,
        },
        displayName: {
            text: "Nasielsk",
            languageCode: "en",
        },
    },
    {
        name: "places/ChIJq52-7AJZaTkR96wMc6qjAV0",
        id: "ChIJq52-7AJZaTkR96wMc6qjAV0",
        formattedAddress: "Nasirabad, Rajasthan 305601, India",
        location: {
            latitude: 26.3017564,
            longitude: 74.7340627,
        },
        displayName: {
            text: "Nasirabad",
            languageCode: "en",
        },
    },
    {
        name: "places/ChIJWfwHc0AMXUcR4MorhlCtAAQ",
        id: "ChIJWfwHc0AMXUcR4MorhlCtAAQ",
        formattedAddress: "31500, Našice, Croatia",
        location: {
            latitude: 45.4932805,
            longitude: 18.0975888,
        },
        displayName: {
            text: "Našice",
            languageCode: "en",
        },
    },
    {
        name: "places/ChIJyT_j-q_q3TsRpuqorfro2ho",
        id: "ChIJyT_j-q_q3TsRpuqorfro2ho",
        formattedAddress: "Nashik Road, Nashik, Maharashtra, India",
        location: {
            latitude: 19.9728896,
            longitude: 73.8229516,
        },
        displayName: {
            text: "Nashik Road",
            languageCode: "en",
        },
    },
    {
        name: "places/ChIJkVOvMdpJzDERIIpbDIqX7gY",
        id: "ChIJkVOvMdpJzDERIIpbDIqX7gY",
        internationalPhoneNumber: "+60 11-6277 1957",
        formattedAddress:
            "Jalan Stadium, Presint Merdeka 118, 50118 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
        location: {
            latitude: 3.1393242999999997,
            longitude: 101.7008106,
        },
        rating: 4.1,
        userRatingCount: 1116,
        displayName: {
            text: "Stadium Merdeka",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Stadium",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJRd6Qa5ZKzDERpnaQSpbCpDk",
        id: "ChIJRd6Qa5ZKzDERpnaQSpbCpDk",
        internationalPhoneNumber: "+60 3-8992 0888",
        formattedAddress:
            "Jalan Barat, Bukit Jalil, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
        location: {
            latitude: 3.054486,
            longitude: 101.6912206,
        },
        rating: 4.5,
        userRatingCount: 12173,
        displayName: {
            text: "National Stadium Bukit Jalil",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Stadium",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJt__YxmYZ2jERKih8lynJnUY",
        id: "ChIJt__YxmYZ2jERKih8lynJnUY",
        formattedAddress: "3 Stadium Walk, Singapore 397692",
        location: {
            latitude: 1.3028119999999999,
            longitude: 103.875334,
        },
        rating: 4.6,
        userRatingCount: 421,
        displayName: {
            text: "Stadium MRT Station (CC6)",
            languageCode: "en",
        },
    },
    {
        name: "places/ChIJd0b0EWvxaS4R8Hb9SpKttuA",
        id: "ChIJd0b0EWvxaS4R8Hb9SpKttuA",
        internationalPhoneNumber: "+62 21 5734070",
        formattedAddress:
            "Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270, Indonesia",
        location: {
            latitude: -6.2183486,
            longitude: 106.8034012,
        },
        rating: 4.8,
        userRatingCount: 55474,
        displayName: {
            text: "Komplek Gelora Bung Karno",
            languageCode: "id",
        },
        primaryTypeDisplayName: {
            text: "Sports Complex",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJm4WvuE7jAGARbdCr0f3bdcE",
        id: "ChIJm4WvuE7jAGARbdCr0f3bdcE",
        internationalPhoneNumber: "+81 6-6875-3377",
        formattedAddress: "3-3 Senribanpakukōen, Suita, Osaka 565-0826, Japan",
        location: {
            latitude: 34.8026857,
            longitude: 135.5381712,
        },
        rating: 4.4,
        userRatingCount: 3459,
        displayName: {
            text: "Panasonic Stadium Suita",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Stadium",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJ0-cIvSo2zDERmWzYQPUfLiM",
        id: "ChIJ0-cIvSo2zDERmWzYQPUfLiM",
        formattedAddress:
            "Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
        location: {
            latitude: 3.1319196999999996,
            longitude: 101.6840589,
        },
        displayName: {
            text: "Federal Territory of Kuala Lumpur",
            languageCode: "en",
        },
    },
    {
        name: "places/ChIJL4Zul54JtzERkiQjy4XuwBs",
        id: "ChIJL4Zul54JtzERkiQjy4XuwBs",
        formattedAddress: "Kuala Terengganu, Terengganu, Malaysia",
        location: {
            latitude: 5.3283230999999995,
            longitude: 103.14121569999999,
        },
        displayName: {
            text: "Kuala Terengganu",
            languageCode: "en",
        },
    },
    {
        name: "places/ChIJ5-rvAcdJzDERfSgcL1uO2fQ",
        id: "ChIJ5-rvAcdJzDERfSgcL1uO2fQ",
        formattedAddress:
            "Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
        location: {
            latitude: 3.1499222,
            longitude: 101.6944619,
        },
        displayName: {
            text: "Kuala Lumpur",
            languageCode: "en",
        },
    },
    {
        name: "places/ChIJ1WJ2bOi8yjERxbofruAstSQ",
        id: "ChIJ1WJ2bOi8yjERxbofruAstSQ",
        formattedAddress: "Kuala Kangsar, Perak, Malaysia",
        location: {
            latitude: 4.7722057,
            longitude: 100.9420703,
        },
        displayName: {
            text: "Kuala Kangsar",
            languageCode: "en",
        },
    },
    {
        name: "places/ChIJL4PyKDOLzDERHYHAzC9YBdw",
        id: "ChIJL4PyKDOLzDERHYHAzC9YBdw",
        formattedAddress: "Kuala Selangor, Selangor, Malaysia",
        location: {
            latitude: 3.3392353999999997,
            longitude: 101.2497808,
        },
        displayName: {
            text: "Kuala Selangor",
            languageCode: "en",
        },
    },
];

export async function getPlaceDetails(
    id: string
): Promise<PlaceDetailsResponse> {
    // add random delay
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));

    const autoCompletePlace = autoCompleteData.suggestions.find(
        (place) => place.placePrediction.placeId === id
    );

    if (!autoCompletePlace) {
        throw new Error(`Place with id ${id} not found`);
    }

    const place = data[Math.floor(Math.random() * data.length)];

    return {
        ...place,
        id: autoCompletePlace.placePrediction.placeId,
        name: autoCompletePlace.placePrediction.text.text,
    };
}
