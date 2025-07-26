"use client";
import MapSection, { Place } from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { useAutocomplete } from "@/hooks/useAutoComplete";
import { useState } from "react";

export default function PlacesApp() {
    const [searchQuery, setSearchQuery] = useState("");
    const { suggestions, loading } = useAutocomplete(searchQuery);

    const selectedPlace: Place | null = {
        name: "Pizza Works",
        address: "1 Sheikh Zayed Road, Dubai, UAE",
        category: "Pizza",
        rating: 4.5,
        latitude: 25.1234,
        longitude: 55.1234,
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                <SearchBox
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isSearching={loading}
                    suggestions={suggestions}
                />
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <MapSection selectedPlace={selectedPlace} />
                </div>
            </div>
        </div>
    );
}
