"use client";
import FavouriteSection from "@/components/FavouriteSection";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { Heart } from "lucide-react";

export default function PlacesApp() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                <SearchBox />
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <MapSection />
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-red-500" />
                            Favorite Places
                        </h2>
                    </div>
                    <FavouriteSection />
                </div>
            </div>
        </div>
    );
}
