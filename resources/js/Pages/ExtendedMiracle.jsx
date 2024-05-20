import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import Likes from "../Components/Likes/Likes";
import useFetchMiracleById from "../Components/Hooks/useFetchMiracleById";
import { RxCross2 } from "react-icons/rx";

export default function ExtendedMiracle() {
    const { miracle, id } = usePage().props;
    const {
        data: miracleData,
        loading,
        error,
    } = useFetchMiracleById(`/api/miracle/${id}`);
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
        <>
            <div>
                <div className="max-w-2xl mx-auto py-14 px-14 bg-white  mt-24 mb-24 font-times">
                    <div className="cursor-pointer mb-14 text-3xl">
                        <RxCross2 onClick={() => window.history.back()} />
                    </div>
                    <div className="mb-4">
                        <h1 className="text-4xl font-bold text-gray-800">
                            {miracle.title}
                        </h1>
                        <div className="flex items-center justify-between">
                            {miracle.user && (
                                <p className="text-2xl text-gray-400 mt-8">
                                    Posted by {miracle.user.name}{" "}
                                    {miracle.created_at?.substring(0, 10)}
                                </p>
                            )}
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
                        <hr className="w-full my-4 bg-gray-300" />
                    </div>
                    {miracle.image && (
                        <div className="mb-4">
                            <img
                                src={miracle.image.path}
                                alt={miracle.title}
                                className="w-full rounded-sm object-cover"
                                style={{ height: "300px" }}
                            />
                        </div>
                    )}
                    <div
                        className="text-xl leading-9"
                        dangerouslySetInnerHTML={{ __html: miracle.content }}
                    />
                </div>
            </div>
        </>
    );
}
