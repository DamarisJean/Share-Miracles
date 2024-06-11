import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import Likes from "../Components/Likes/Likes";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ExtendedMiracle() {
    // Fetch miracle and user ID from page props using Inertia.js
    const { miracle, auth } = usePage().props;

    // State to manage whether the miracle is liked by the current user
    const [isLiked, setIsLiked] = useState(miracle.isLiked);

    // Update the liked state when the miracle data changes
    useEffect(() => {
        setIsLiked(miracle.isLiked);
    }, [miracle]);

    return (
        // Layout for authenticated users
        <AuthenticatedLayout user={auth.user}>
            <div className="max-w-2xl mx-auto py-5 px-4 bg-white rounded-lg mb-24 font-times">
                <div className="mb-4 sm:p-0 p-6">
                    <div className="flex items-center justify-between mb-4">
                        {/* Display the created date and the user's name */}
                        {/* Optional chaining (?.) ensures we don't get an error if created_at is null or undefined */}
                        {/* Substring (0, 10) extracts the first 10 characters, which represent the date */}
                        {miracle.user && (
                            <p className="text-l text-gray-400 mt-8">
                                Posted by {miracle.user.name}{" "}
                                {miracle.created_at?.substring(0, 10)}
                            </p>
                        )}
                        {/* Display the Likes component if the user is authenticated */}
                        {auth?.user && (
                            <div className="mt-6 flex items-center">
                                <Likes
                                    miracleId={miracle.id}
                                    isInitiallyLiked={isLiked}
                                    className="flex justify-between w-full"
                                />
                            </div>
                        )}
                    </div>
                    <hr className="w-full bg-gray-300" />
                </div>
                {/* Display the miracle image if it exists */}
                {miracle.image && (
                    <div className="mb-4">
                        <img
                            src={miracle.image.path}
                            alt={miracle.title}
                            className="sm:w-full p-10 rounded-sm object-cover h-300"
                        />
                    </div>
                )}
                {/* Display the title of the miracle */}
                <h1 className="text-2xl sm:text-3xl ml-5 sm:ml-0 sm:mb-6 sm:mt-12 font-bold text-gray-800">
                    {miracle.title}
                </h1>
                {/* Display the content of the miracle */}
                <div
                    className="text-sm sm:text-lg sm:p-0 p-6 leading-9"
                    dangerouslySetInnerHTML={{ __html: miracle.content }}
                />
            </div>
        </AuthenticatedLayout>
    );
}
