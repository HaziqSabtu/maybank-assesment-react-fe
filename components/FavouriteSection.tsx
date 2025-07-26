import { Heart, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useSearchParams } from "next/navigation";
import { fetchItems } from "@/features/place/placeFavouritePageSlice";
import FavouriteCard from "./FavouriteCard";
import FavouriteSkeletonCard from "./FavouriteSkeletonCard";

const FavouriteSection = () => {
    const searchParams = useSearchParams();
    const placeId = searchParams.get("id");
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useAppDispatch();
    const { content, page, loading, hasNextPage, hasPreviousPage } =
        useAppSelector((state) => state.placeFavourites);
    const auth = useAppSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchItems(currentPage));
    }, [currentPage, dispatch, auth.isAuthenticated]);

    if (!auth.isAuthenticated) {
        return (
            <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                    <Heart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Sign in to view your favorites
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Save and organize your favorite places to easily find
                        them later. Create an account or sign in to get started.
                    </p>
                    <Button
                        onClick={() => setShowSignInModal(true)}
                        className="flex items-center gap-2 mx-auto"
                        size="lg"
                    >
                        <User className="h-5 w-5" />
                        Sign In to Continue
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {loading ? (
                    <>
                        {Array.from({ length: 6 }, (_, i) => i + 1).map(
                            (page) => (
                                <FavouriteSkeletonCard key={page} />
                            )
                        )}
                    </>
                ) : (
                    content.map((place) => (
                        <FavouriteCard
                            isSelected={placeId === place.id}
                            place={place}
                            key={place.id}
                        />
                    ))
                )}
            </div>

            {/* Pagination */}
            <Pagination>
                <PaginationContent>
                    {hasPreviousPage && (
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage > 1)
                                        setCurrentPage(currentPage - 1);
                                }}
                                className={
                                    currentPage === 1
                                        ? "pointer-events-none opacity-50"
                                        : ""
                                }
                            />
                        </PaginationItem>
                    )}
                    {hasNextPage && (
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage < page.totalPages)
                                        setCurrentPage(currentPage + 1);
                                }}
                                className={
                                    currentPage === page.totalPages
                                        ? "pointer-events-none opacity-50"
                                        : ""
                                }
                            />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </>
    );
};

export default FavouriteSection;
