import React from "react";
import { Link } from "@inertiajs/react";
import useFetchMiracleById from "./useFetchMiracleById.jsx";

export default function Miracles() {
    const { data: miracles, loading, error } = useFetchMiracleById("/miracles");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto p-4 ">
            <div className="flex flex-col space-y-6 font-times">
                {" "}
                {miracles.map((miracle) => (
                    <div key={miracle.id} className="w-3/4">
                        <Link
                            href={route("extended.show", { id: miracle.id })}
                            className="block p-6 bg-white  border-b border-gray-300"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex-1 pr-4">
                                    <h2 className="text-2xl font-semibold mb-2">
                                        {miracle.title}
                                    </h2>
                                    <p className="text-gray-700">
                                        {miracle.content.substring(0, 200)}...
                                    </p>
                                </div>
                                {miracle.image?.path && (
                                    <img
                                        src={miracle.image.path}
                                        alt={miracle.title}
                                        className="w-32 h-32 rounded object-cover"
                                    />
                                )}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
