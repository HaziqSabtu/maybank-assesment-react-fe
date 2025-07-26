import { Heart, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useSearchParams } from "next/navigation";
import { fetchItems } from "@/features/place/placeFavouritePageSlice";
import FavouriteCard from "./FavouriteCard";
import FavouriteSkeletonCard from "./FavouriteSkeletonCard";

type Props = {
    isAuthenticated: boolean;
};

const FavouriteSection = ({ isAuthenticated }: Props) => {
    const searchParams = useSearchParams();
    const placeId = searchParams.get("id");
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useAppDispatch();
    const { content, page, loading } = useAppSelector(
        (state) => state.placeFavourites
    );

    const selectedPlace = {
        id: placeId,
    };

    const totalPage = page.totalPages;

    useEffect(() => {
        dispatch(fetchItems(currentPage));
    }, [currentPage, dispatch]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPage) {
            setCurrentPage(page);
            // dispatch(fetchItems(page));
        }
    };

    if (!isAuthenticated) {
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
                            isSelected={selectedPlace?.id === place.id}
                            place={place}
                            key={place.id}
                        />
                    ))
                )}
            </div>

            {/* Pagination */}
            <Pagination>
                <PaginationContent>
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

                    {Array.from(
                        { length: page.totalPages },
                        (_, i) => i + 1
                    ).map((page) => (
                        <PaginationItem key={page}>
                            <PaginationLink
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(page);
                                }}
                                isActive={currentPage === page}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

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
                </PaginationContent>
            </Pagination>
        </>
    );
};

export default FavouriteSection;
