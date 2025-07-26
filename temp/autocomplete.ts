import { PlacePredictionResponse } from "@/types/PlaceApi";

export const data: PlacePredictionResponse = {
    suggestions: [
        {
            placePrediction: {
                place: "places/chij001",
                placeId: "chij001",
                text: {
                    text: "La Bella Pizza, 12 Via Roma, Rome, Italy",
                    matches: [{ endOffset: 2 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "La Bella Pizza",
                        matches: [{ endOffset: 2 }],
                    },
                    secondaryText: {
                        text: "12 Via Roma, Rome, Italy",
                    },
                },
                types: [
                    "italian_restaurant",
                    "restaurant",
                    "food",
                    "establishment",
                ],
            },
        },
        {
            placePrediction: {
                place: "places/chij002",
                placeId: "chij002",
                text: {
                    text: "Deep Dish Central, 77 Michigan Ave, Chicago, IL, USA",
                    matches: [{ endOffset: 4 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Deep Dish Central",
                        matches: [{ endOffset: 4 }],
                    },
                    secondaryText: {
                        text: "77 Michigan Ave, Chicago, IL, USA",
                    },
                },
                types: ["pizza_restaurant", "restaurant", "point_of_interest"],
            },
        },
        {
            placePrediction: {
                place: "places/chij003",
                placeId: "chij003",
                text: {
                    text: "Tokyo Pizza Lounge, 5-3-1 Roppongi, Tokyo, Japan",
                    matches: [{ endOffset: 5 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Tokyo Pizza Lounge",
                        matches: [{ endOffset: 5 }],
                    },
                    secondaryText: {
                        text: "5-3-1 Roppongi, Tokyo, Japan",
                    },
                },
                types: [
                    "japanese_restaurant",
                    "meal_takeaway",
                    "food",
                    "establishment",
                ],
            },
        },
        {
            placePrediction: {
                place: "places/chij004",
                placeId: "chij004",
                text: {
                    text: "Pizza Nova, 88 King Street West, Toronto, Canada",
                    matches: [{ endOffset: 5 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Pizza Nova",
                        matches: [{ endOffset: 5 }],
                    },
                    secondaryText: {
                        text: "88 King Street West, Toronto, Canada",
                    },
                },
                types: ["restaurant", "pizza_restaurant", "establishment"],
            },
        },
        {
            placePrediction: {
                place: "places/chij005",
                placeId: "chij005",
                text: {
                    text: "Slice & Dice, 19 George Street, Sydney, Australia",
                    matches: [{ endOffset: 5 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Slice & Dice",
                        matches: [{ endOffset: 5 }],
                    },
                    secondaryText: {
                        text: "19 George Street, Sydney, Australia",
                    },
                },
                types: ["food", "pizza_restaurant", "establishment"],
            },
        },
        {
            placePrediction: {
                place: "places/chij006",
                placeId: "chij006",
                text: {
                    text: "Margherita House, 1 Rue de Paris, Lyon, France",
                    matches: [{ endOffset: 5 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Margherita House",
                        matches: [{ endOffset: 5 }],
                    },
                    secondaryText: {
                        text: "1 Rue de Paris, Lyon, France",
                    },
                },
                types: [
                    "restaurant",
                    "italian_restaurant",
                    "point_of_interest",
                ],
            },
        },
        {
            placePrediction: {
                place: "places/chij007",
                placeId: "chij007",
                text: {
                    text: "New York Pizza Hub, 55 Broadway, NYC, USA",
                    matches: [{ endOffset: 3 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "New York Pizza Hub",
                        matches: [{ endOffset: 3 }],
                    },
                    secondaryText: {
                        text: "55 Broadway, NYC, USA",
                    },
                },
                types: ["restaurant", "food", "pizza_restaurant"],
            },
        },
        {
            placePrediction: {
                place: "places/chij008",
                placeId: "chij008",
                text: {
                    text: "Crust & Craft, 9 Albert Embankment, London, UK",
                    matches: [{ endOffset: 3 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Crust & Craft",
                        matches: [{ endOffset: 3 }],
                    },
                    secondaryText: {
                        text: "9 Albert Embankment, London, UK",
                    },
                },
                types: ["fine_dining_restaurant", "food", "establishment"],
            },
        },
        {
            placePrediction: {
                place: "places/chij009",
                placeId: "chij009",
                text: {
                    text: "Pizza Nirvana, 42 Orchard Road, Singapore",
                    matches: [{ endOffset: 3 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Pizza Nirvana",
                        matches: [{ endOffset: 3 }],
                    },
                    secondaryText: {
                        text: "42 Orchard Road, Singapore",
                    },
                },
                types: ["restaurant", "pizza_restaurant", "point_of_interest"],
            },
        },
        {
            placePrediction: {
                place: "places/chij010",
                placeId: "chij010",
                text: {
                    text: "Napoli Express, 8 Placa de Catalunya, Barcelona, Spain",
                    matches: [{ endOffset: 4 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Napoli Express",
                        matches: [{ endOffset: 4 }],
                    },
                    secondaryText: {
                        text: "8 Placa de Catalunya, Barcelona, Spain",
                    },
                },
                types: ["food", "establishment", "italian_restaurant"],
            },
        },
        {
            placePrediction: {
                place: "places/chij011",
                placeId: "chij011",
                text: {
                    text: "Pizza Hanoi, 3 Le Duan Street, Hanoi, Vietnam",
                    matches: [{ endOffset: 3 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Pizza Hanoi",
                        matches: [{ endOffset: 3 }],
                    },
                    secondaryText: {
                        text: "3 Le Duan Street, Hanoi, Vietnam",
                    },
                },
                types: ["restaurant", "meal_takeaway", "establishment"],
            },
        },
        {
            placePrediction: {
                place: "places/chij012",
                placeId: "chij012",
                text: {
                    text: "Vesuvio Pizza Bar, 17 Bourke Street, Melbourne, Australia",
                    matches: [{ endOffset: 3 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Vesuvio Pizza Bar",
                        matches: [{ endOffset: 3 }],
                    },
                    secondaryText: {
                        text: "17 Bourke Street, Melbourne, Australia",
                    },
                },
                types: ["pizza_restaurant", "food", "establishment"],
            },
        },
        {
            placePrediction: {
                place: "places/chij013",
                placeId: "chij013",
                text: {
                    text: "Rustico, 210 Rua Augusta, São Paulo, Brazil",
                    matches: [{ endOffset: 2 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Rustico",
                        matches: [{ endOffset: 2 }],
                    },
                    secondaryText: {
                        text: "210 Rua Augusta, São Paulo, Brazil",
                    },
                },
                types: ["restaurant", "food", "italian_restaurant"],
            },
        },
        {
            placePrediction: {
                place: "places/chij014",
                placeId: "chij014",
                text: {
                    text: "Pizzanada, 88 Artz Pedregal, CDMX, Mexico",
                    matches: [{ endOffset: 3 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Pizzanada",
                        matches: [{ endOffset: 3 }],
                    },
                    secondaryText: {
                        text: "88 Artz Pedregal, CDMX, Mexico",
                    },
                },
                types: ["food", "restaurant", "pizza_restaurant"],
            },
        },
        {
            placePrediction: {
                place: "places/chij015",
                placeId: "chij015",
                text: {
                    text: "Pizzeria Amore, 44 Karl Johans Gate, Oslo, Norway",
                    matches: [{ endOffset: 4 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Pizzeria Amore",
                        matches: [{ endOffset: 4 }],
                    },
                    secondaryText: {
                        text: "44 Karl Johans Gate, Oslo, Norway",
                    },
                },
                types: [
                    "restaurant",
                    "fine_dining_restaurant",
                    "establishment",
                ],
            },
        },
        {
            placePrediction: {
                place: "places/chij016",
                placeId: "chij016",
                text: {
                    text: "Pizza Works, 1 Sheikh Zayed Road, Dubai, UAE",
                    matches: [{ endOffset: 2 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Pizza Works",
                        matches: [{ endOffset: 2 }],
                    },
                    secondaryText: {
                        text: "1 Sheikh Zayed Road, Dubai, UAE",
                    },
                },
                types: ["establishment", "pizza_restaurant", "restaurant"],
            },
        },
        {
            placePrediction: {
                place: "places/chij017",
                placeId: "chij017",
                text: {
                    text: "Crust Republic, 18 Orchard Link, Singapore",
                    matches: [{ endOffset: 3 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Crust Republic",
                        matches: [{ endOffset: 3 }],
                    },
                    secondaryText: {
                        text: "18 Orchard Link, Singapore",
                    },
                },
                types: ["restaurant", "food", "point_of_interest"],
            },
        },
        {
            placePrediction: {
                place: "places/chij018",
                placeId: "chij018",
                text: {
                    text: "Panino Pizza, 12 O'Connell Street, Dublin, Ireland",
                    matches: [{ endOffset: 3 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Panino Pizza",
                        matches: [{ endOffset: 3 }],
                    },
                    secondaryText: {
                        text: "12 O'Connell Street, Dublin, Ireland",
                    },
                },
                types: ["restaurant", "meal_takeaway", "pizza_restaurant"],
            },
        },
        {
            placePrediction: {
                place: "places/chij019",
                placeId: "chij019",
                text: {
                    text: "Bella Napoli, 45 King Street, Auckland, New Zealand",
                    matches: [{ endOffset: 3 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Bella Napoli",
                        matches: [{ endOffset: 3 }],
                    },
                    secondaryText: {
                        text: "45 King Street, Auckland, New Zealand",
                    },
                },
                types: ["pizza_restaurant", "restaurant", "establishment"],
            },
        },
        {
            placePrediction: {
                place: "places/chij020",
                placeId: "chij020",
                text: {
                    text: "Red Oven, 100 Sukhumvit Road, Bangkok, Thailand",
                    matches: [{ endOffset: 3 }],
                },
                structuredFormat: {
                    mainText: {
                        text: "Red Oven",
                        matches: [{ endOffset: 3 }],
                    },
                    secondaryText: {
                        text: "100 Sukhumvit Road, Bangkok, Thailand",
                    },
                },
                types: ["food", "establishment", "restaurant"],
            },
        },
    ],
};

function getRandomIndices(length: number, count: number) {
    const indices = [];
    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * length);
        indices.push(index);
    }
    return indices;
}

export async function getSuggestions(): Promise<PlacePredictionResponse> {
    // sleep for random time
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

    // get 5 random data
    const randomIndices = getRandomIndices(data.suggestions.length, 5);
    const suggestions = data.suggestions.filter((_, index) =>
        randomIndices.includes(index)
    );

    return {
        suggestions,
    };
}
