import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function Miracles() {
    const [miracles, setMiracles] = useState([]);

    useEffect(() => {
        const fetchMiracles = async () => {
            try {
                const response = await axios.get("/miracles");
                setMiracles(response.data);
            } catch (error) {
                console.log("There was an error fetching the miracles", error);
            }
        };
        fetchMiracles();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-times">
                {miracles.map((miracle) => (
                    <Link
                        key={miracle.id}
                        to={`/extended/${miracle.id}`}
                        className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 font-times"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                {miracle.title}
                            </h2>
                            <p className="text-gray-700">
                                {miracle.content.substring(0, 200)}...
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
