"use client";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { useAutocomplete } from "@/hooks/useAutoComplete";
import { useState } from "react";

export default function PlacesApp() {
    const [searchQuery, setSearchQuery] = useState("");
    const { suggestions, loading, error } = useAutocomplete(searchQuery);

    const showSuggestions = false;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                <SearchBox
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isSearching={loading}
                    showSuggestions={showSuggestions}
                />
            </div>
        </div>
    );
}
