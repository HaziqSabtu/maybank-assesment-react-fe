import { MapPin, User } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import SignInModal from "./SignInModal";
import { logout } from "@/features/auth/authSlice";
import { getInitials } from "@/lib/initials";

const Navbar = () => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector((state) => state.auth);

    const [showSignInModal, setShowSignInModal] = useState(false);

    const initials = auth.username ? getInitials(auth.username) : "";

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <MapPin className="h-8 w-8 text-yellow-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900">
                                Map Autocomplete
                            </span>
                        </div>
                    </div>
                    {auth.isAuthenticated && !auth.loading ? (
                        <div className="flex items-center space-x-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="relative h-10 w-10 rounded-full"
                                    >
                                        <Avatar className="h-10 w-10">
                                            <AvatarFallback className="bg-yellow-500 text-white">
                                                {initials}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-56"
                                    align="end"
                                    forceMount
                                >
                                    <DropdownMenuItem
                                        onClick={() => {
                                            dispatch(logout());
                                            localStorage.removeItem("auth");
                                        }}
                                    >
                                        <span>Sign out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ) : (
                        <Button
                            onClick={() => setShowSignInModal(true)}
                            className="flex items-center gap-2"
                        >
                            <User className="h-4 w-4" />
                            Sign In
                        </Button>
                    )}
                </div>
            </div>
            <SignInModal
                isOpen={showSignInModal}
                onClose={() => setShowSignInModal(false)}
            />
        </nav>
    );
};

export default Navbar;
