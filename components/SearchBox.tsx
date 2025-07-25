import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";

type Props = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    isSearching: boolean;
    showSuggestions: boolean;
};

const SearchBox = ({
    searchQuery,
    setSearchQuery,
    isSearching,
    showSuggestions,
}: Props) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                <Input
                    type="text"
                    placeholder="Search for places, restaurants, attractions..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    className="pl-10 pr-4 py-3 text-lg"
                />

                {isSearching && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBox;
