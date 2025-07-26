import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login } from "@/features/auth/authSlice";
import { AuthCache } from "@/types/AuthUser";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

function SignInModal({ isOpen, onClose }: Props) {
    const [usernameInput, setUsernameInput] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAppDispatch();
    const { loading, isAuthenticated, error, username, token } = useAppSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isAuthenticated) {
            if (!username || !token) return;
            const authCache: AuthCache = {
                username,
                token,
            };

            localStorage.setItem("auth", JSON.stringify(authCache));
            setUsernameInput("");
            setPassword("");
            onClose();
        }
    }, [isAuthenticated, onClose, username, token]);

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!usernameInput.trim() || !password.trim()) return;
        dispatch(login({ username: usernameInput, password }));
    };

    const handleBackdropClick = (e: {
        target: unknown;
        currentTarget: unknown;
    }) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Sign In
                    </h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="h-8 w-8"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>

                    {error && (
                        <div className="flex items-center justify-center text-sm text-red-500">
                            {error}
                        </div>
                    )}

                    <div className="flex gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="flex-1 bg-transparent"
                            disabled={loading}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1"
                            disabled={
                                loading ||
                                !usernameInput.trim() ||
                                !password.trim()
                            }
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    Signing In...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}

export default SignInModal;
