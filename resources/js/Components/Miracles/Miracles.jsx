import React from "react";
import { Link, usePage } from "@inertiajs/react";
import useFetchMiracleById from "../Hooks/useFetchMiracleById.jsx";

// LIST OF MIRACLES

export default function Miracles() {
    const { data: miracles, loading, error } = useFetchMiracleById("/miracles");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto flex justify-center sm:ml-20">
            <div className="grid gap-8 font-times">
                {miracles.map((miracle) => (
                    <div
                        key={miracle.id}
                        className="flex flex-row sm:w-4/5 items-center border-b border-b-gray-200 pb-10 cursor-pointer"
                    >
                        <Link
                            href={route("extended.show", { id: miracle.id })}
                            className="flex-1 md:w-auto"
                        >
                            <div className="bg-white">
                                <h2 className="text-xl font-semibold mb-2">
                                    {miracle.title}
                                </h2>
                                <p className="text-gray-700 text-xs md:text-base">
                                    {miracle.content.substring(0, 200)}...
                                </p>
                            </div>
                        </Link>
                        {miracle.image?.path && (
                            <img
                                src={miracle.image.path}
                                alt={miracle.title}
                                className="w-28 h-28 object-cover ml-4"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
