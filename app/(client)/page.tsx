"use client";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

export default function PlacesApp() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                <SearchBox />
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <MapSection />
                </div>
            </div>
        </div>
    );
}
