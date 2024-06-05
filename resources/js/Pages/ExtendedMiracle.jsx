// This component is responsible for displaying the detailed view of a miracle when one is selected in the Miracles section of the Dashboard.

import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import Likes from "../Components/Likes/Likes";
import useFetchMiracleById from "../Components/Hooks/useFetchMiracleById";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ExtendedMiracle() {
    // Fetch miracle and user ID from page props using Inertia.js
    const { miracle, id } = usePage().props;

    // Fetch the miracle data using the custom hook
    const {
        data: miracleData,
        loading,
        error,
    } = useFetchMiracleById(`/api/miracle/${id}`);

    // State to manage whether the miracle is liked by the current user
    const [isLiked, setIsLiked] = useState(false);
    const { auth } = usePage().props;

    // Update the liked state when the miracle data is fetched
    useEffect(() => {
        if (miracleData) {
            setIsLiked(miracleData.isLiked);
        }
    }, [miracleData]);

    // Show loading indicator while the data is being fetched
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-lg font-semibold">Loading...</div>
            </div>
        );
    }

    // Show error message if there's an error fetching the data
    if (error) {
        return <div className="text-center mt-4">{error}</div>;
    }

    return (
        // Layout for authenticated users
        <AuthenticatedLayout user={auth.user}>
            <div className="max-w-2xl mx-auto py-5 px-4 bg-white rounded-lg mb-24 font-times">
                <div className="mb-4 sm:p-0 p-6">
                    <div className=" flex items-center justify-between mb-4">
                        {miracle.user && (
                            <p className="text-l text-gray-400 mt-8">
                                Posted by {miracle.user.name}{" "}
                                {miracle.created_at?.substring(0, 10)}
                            </p>
                        )}
                        {auth?.user && (
                            <div className=" mt-6 flex items-center">
                                <Likes
                                    miracleId={miracle.id}
                                    isInitiallyLiked={isLiked}
                                    className=" flex justify-between w-full"
                                />
                            </div>
                        )}
                    </div>
                    <hr className="w-full bg-gray-300" />
                </div>
                {miracle.image && (
                    <div className="mb-4">
                        <img
                            src={miracle.image.path}
                            alt={miracle.title}
                            className="sm:w-full p-10 rounded-sm object-cover h-300"
                        />
                    </div>
                )}
                <h1 className="text-2xl sm:text-3xl ml-5 sm:ml-0 sm:mb-6 sm:mt-12 font-bold text-gray-800">
                    {miracle.title}
                </h1>
                <div
                    className="text-sm sm:text-lg  sm:p-0 p-6 leading-9"
                    dangerouslySetInnerHTML={{ __html: miracle.content }}
                />
            </div>
        </AuthenticatedLayout>
    );
}
