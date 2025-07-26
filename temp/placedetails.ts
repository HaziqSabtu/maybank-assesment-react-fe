import { PlaceDetailsResponse } from "@/types/PlaceApi";
import { data as autoCompleteData } from "./autocomplete";

const data = [
    {
        name: "places/ChIJQ_ZtFhS_QyIRK-q31N-jT2M",
        id: "ChIJQ_ZtFhS_QyIRK-q31N-jT2M",
        internationalPhoneNumber: "+1 212-555-1234",
        formattedAddress: "1 Times Sq, New York, NY 10036, USA",
        location: {
            latitude: 40.758,
            longitude: -73.9855,
        },
        rating: 4.7,
        userRatingCount: 150000,
        displayName: {
            text: "Times Square",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Tourist Attraction",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJfR4oHhJ_QyIR0bJbQ1bN6Qk",
        id: "ChIJfR4oHhJ_QyIR0bJbQ1bN6Qk",
        internationalPhoneNumber: "+44 20 7987 6543",
        formattedAddress: "Parliament Square, Westminster, London SW1P 3JX, UK",
        location: {
            latitude: 51.5008,
            longitude: -0.1246,
        },
        rating: 4.6,
        userRatingCount: 80000,
        displayName: {
            text: "Big Ben",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Landmark",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJ1e4W7L-pDTkR0rK9f8h2D9w",
        id: "ChIJ1e4W7L-pDTkR0rK9f8h2D9w",
        internationalPhoneNumber: "+81 3-5555-7890",
        formattedAddress:
            "1-1, Marunouchi, Chiyoda City, Tokyo 100-8111, Japan",
        location: {
            latitude: 35.6812,
            longitude: 139.7671,
        },
        rating: 4.5,
        userRatingCount: 60000,
        displayName: {
            text: "Tokyo Imperial Palace",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Historical Landmark",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJB4a_d_f8_0gR_J-F-z-f8_0g",
        id: "ChIJB4a_d_f8_0gR_J-F-z-f8_0g",
        internationalPhoneNumber: "+33 1 44 88 20 00",
        formattedAddress: "Rue de Rivoli, 75001 Paris, France",
        location: {
            latitude: 48.8606,
            longitude: 2.3376,
        },
        rating: 4.8,
        userRatingCount: 200000,
        displayName: {
            text: "Louvre Museum",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Art Museum",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJN1t_0rL9mR4R9t-r_t_0rL9m",
        id: "ChIJN1t_0rL9mR4R9t-r_t_0rL9m",
        internationalPhoneNumber: "+39 06 6988 4466",
        formattedAddress:
            "Piazza San Pietro, 00120 Città del Vaticano, Vatican City",
        location: {
            latitude: 41.9022,
            longitude: 12.4539,
        },
        rating: 4.9,
        userRatingCount: 180000,
        displayName: {
            text: "St. Peter's Basilica",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Religious Site",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJx_t0_PzLmjgRLU2N-z-t0_PzL",
        id: "ChIJx_t0_PzLmjgRLU2N-z-t0_PzL",
        internationalPhoneNumber: "+61 2 9250 7111",
        formattedAddress: "Bennelong Point, Sydney NSW 2000, Australia",
        location: {
            latitude: -33.8568,
            longitude: 151.2153,
        },
        rating: 4.7,
        userRatingCount: 120000,
        displayName: {
            text: "Sydney Opera House",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Performing Arts Venue",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJY0D_Yf3bDTkRk-q31N-jT2M",
        id: "ChIJY0D_Yf3bDTkRk-q31N-jT2M",
        internationalPhoneNumber: "+55 21 2285-1234",
        formattedAddress:
            "Rua do Catete, 153 - Catete, Rio de Janeiro - RJ, 22220-000, Brazil",
        location: {
            latitude: -22.9255,
            longitude: -43.1784,
        },
        rating: 4.5,
        userRatingCount: 45000,
        displayName: {
            text: "Christ the Redeemer",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Statue",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJX7bVq7aKDTkRkWd-z-f8_0g",
        id: "ChIJX7bVq7aKDTkRkWd-z-f8_0g",
        internationalPhoneNumber: "+20 2 27248888",
        formattedAddress: "Al-Haram, Giza Governorate, Egypt",
        location: {
            latitude: 29.9792,
            longitude: 31.1342,
        },
        rating: 4.6,
        userRatingCount: 90000,
        displayName: {
            text: "Pyramids of Giza",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Ancient Ruin",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJd-f8_0gR_J-F-z-f8_0g",
        id: "ChIJd-f8_0gR_J-F-z-f8_0g",
        internationalPhoneNumber: "+86 10 8408 8688",
        formattedAddress: "Jingshan Front St, Dongcheng, Beijing, China",
        location: {
            latitude: 39.9164,
            longitude: 116.3972,
        },
        rating: 4.6,
        userRatingCount: 75000,
        displayName: {
            text: "Forbidden City",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Palace",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJS_kS9r_jDTkRLU2N-z-t0_PzL",
        id: "ChIJS_kS9r_jDTkRLU2N-z-t0_PzL",
        internationalPhoneNumber: "+91 11 2336 5358",
        formattedAddress:
            "Dharm Marg, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110021, India",
        location: {
            latitude: 28.6129,
            longitude: 77.2295,
        },
        rating: 4.6,
        userRatingCount: 55000,
        displayName: {
            text: "India Gate",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "War Memorial",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJv4u9d3yQDTkRLU2N-z-t0_PzL",
        id: "ChIJv4u9d3yQDTkRLU2N-z-t0_PzL",
        internationalPhoneNumber: "+7 495 695-37-76",
        formattedAddress: "Red Square, Moscow, Russia",
        location: {
            latitude: 55.7539,
            longitude: 37.6204,
        },
        rating: 4.7,
        userRatingCount: 100000,
        displayName: {
            text: "Red Square",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "City Square",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJY0D_Yf3bDTkRk-q31N-jT2M",
        id: "ChIJY0D_Yf3bDTkRk-q31N-jT2M",
        internationalPhoneNumber: "+52 55 5250 8281",
        formattedAddress:
            "Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
        location: {
            latitude: 19.4265,
            longitude: -99.1678,
        },
        rating: 4.6,
        userRatingCount: 30000,
        displayName: {
            text: "Angel of Independence",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Monument",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJr0_V2RjS_0gRMJ-F-z-f8_0g",
        id: "ChIJr0_V2RjS_0gRMJ-F-z-f8_0g",
        internationalPhoneNumber: "+49 30 20050",
        formattedAddress: "Platz der Republik 1, 11011 Berlin, Germany",
        location: {
            latitude: 52.5186,
            longitude: 13.3762,
        },
        rating: 4.7,
        userRatingCount: 65000,
        displayName: {
            text: "Reichstag Building",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Government Building",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJl8Y-eD-hDTkR8Wd-z-f8_0g",
        id: "ChIJl8Y-eD-hDTkR8Wd-z-f8_0g",
        internationalPhoneNumber: "+82 2-3700-1114",
        formattedAddress: "161 Sajik-ro, Jongno-gu, Seoul, South Korea",
        location: {
            latitude: 37.5796,
            longitude: 126.977,
        },
        rating: 4.6,
        userRatingCount: 40000,
        displayName: {
            text: "Gyeongbokgung Palace",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Palace",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJx_t0_PzLmjgRLU2N-z-t0_PzL",
        id: "ChIJx_t0_PzLmjgRLU2N-z-t0_PzL",
        internationalPhoneNumber: "+65 6332 5000",
        formattedAddress: "1 Esplanade Dr, Singapore 038981",
        location: {
            latitude: 1.2882,
            longitude: 103.858,
        },
        rating: 4.6,
        userRatingCount: 35000,
        displayName: {
            text: "Marina Bay Sands",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Hotel",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJX7bVq7aKDTkRkWd-z-f8_0g",
        id: "ChIJX7bVq7aKDTkRkWd-z-f8_0g",
        internationalPhoneNumber: "+971 4 8888888",
        formattedAddress:
            "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
        location: {
            latitude: 25.1972,
            longitude: 55.2744,
        },
        rating: 4.7,
        userRatingCount: 160000,
        displayName: {
            text: "Burj Khalifa",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Skyscraper",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJN1t_0rL9mR4R9t-r_t_0rL9m",
        id: "ChIJN1t_0rL9mR4R9t-r_t_0rL9m",
        internationalPhoneNumber: "+81 422-47-8101",
        formattedAddress:
            "1-1-83 Inokashira-cho, Musashino-shi, Tokyo 180-0005, Japan",
        location: {
            latitude: 35.6961,
            longitude: 139.5704,
        },
        rating: 4.5,
        userRatingCount: 28000,
        displayName: {
            text: "Ghibli Museum",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Museum",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJd-f8_0gR_J-F-z-f8_0g",
        id: "ChIJd-f8_0gR_J-F-z-f8_0g",
        internationalPhoneNumber: "+66 2 224 3290",
        formattedAddress:
            "Na Phra Lan Rd, Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200, Thailand",
        location: {
            latitude: 13.75,
            longitude: 100.4934,
        },
        rating: 4.6,
        userRatingCount: 70000,
        displayName: {
            text: "Grand Palace",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Royal Palace",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJv4u9d3yQDTkRLU2N-z-t0_PzL",
        id: "ChIJv4u9d3yQDTkRLU2N-z-t0_PzL",
        internationalPhoneNumber: "+1 415-555-7890",
        formattedAddress: "Golden Gate Bridge, San Francisco, CA, USA",
        location: {
            latitude: 37.8199,
            longitude: -122.4783,
        },
        rating: 4.8,
        userRatingCount: 110000,
        displayName: {
            text: "Golden Gate Bridge",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Bridge",
            languageCode: "en-US",
        },
    },
    {
        name: "places/ChIJQ_ZtFhS_QyIRK-q31N-jT2M",
        id: "ChIJQ_ZtFhS_QyIRK-q31N-jT2M",
        internationalPhoneNumber: "+34 913 30 24 00",
        formattedAddress: "Plaza de la Lealtad, 5, 28014 Madrid, Spain",
        location: {
            latitude: 40.4138,
            longitude: -3.6921,
        },
        rating: 4.7,
        userRatingCount: 42000,
        displayName: {
            text: "Prado Museum",
            languageCode: "en",
        },
        primaryTypeDisplayName: {
            text: "Art Museum",
            languageCode: "en-US",
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
