import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import Likes from "../Components/Likes";
import useFetchMiracles from "../Components/useFetchMiraclesId";

export default function ExtendedMiracle() {
    const { miracle, id } = usePage().props;
    const {
        data: miracleData,
        loading,
        error,
    } = useFetchMiracles(`/api/miracle/${id}`);
    const [isLiked, setIsLiked] = useState(false);
    const { auth } = usePage().props;

    useEffect(() => {
        if (miracleData) {
            setIsLiked(miracleData.isLiked);
        }
    }, [miracleData]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-lg font-semibold">Loading...</div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center mt-4">{error}</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-lg mt-6 font-times">
            <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-800">
                    {miracle.title}
                </h1>
                {miracle.user && (
                    <p className="text-sm text-gray-500">
                        Posted by {miracle.user.name} on{" "}
                        {miracle.created_at?.substring(0, 10)}
                    </p>
                )}
            </div>
            {miracle.image && (
                <div className="mb-4">
                    <img
                        src={miracle.image.path}
                        alt={miracle.title}
                        className="w-full object-cover rounded"
                        style={{ height: "300px" }}
                    />
                </div>
            )}
            <p className="text-gray-700 leading-relaxed">{miracle.content}</p>
            {auth?.user && (
                <div className="mt-6">
                    <Likes miracleId={miracle.id} isInitiallyLiked={isLiked} />
                </div>
            )}
        </div>
    );
}
