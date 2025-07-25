import { MapPin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import currentUser from "@/temp/currentUser";

const Navbar = () => {
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
                    <div className="flex items-center space-x-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="relative h-10 w-10 rounded-full"
                                >
                                    <Avatar className="h-10 w-10">
                                        {currentUser.avatar && (
                                            <AvatarImage
                                                src={currentUser.avatar}
                                                alt={currentUser.name}
                                            />
                                        )}
                                        <AvatarFallback className="bg-yellow-500 text-white">
                                            {currentUser.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-56"
                                align="end"
                                forceMount
                            >
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
