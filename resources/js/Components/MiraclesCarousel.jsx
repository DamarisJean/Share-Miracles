import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";

const useFetchMiracles = () => {
    const [miracles, setMiracles] = useState([]);

    useEffect(() => {
        const fetchMiracles = async () => {
            try {
                const { data } = await axios.get("/miracles");
                setMiracles(data);
            } catch (error) {
                console.error("Error fetching miracles:", error);
            }
        };

        fetchMiracles();
    }, []);

    return miracles;
};

export default function MiraclesCarousel() {
    const miracles = useFetchMiracles();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % miracles.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [miracles.length]);

    const renderMiracleItem = (miracle) => {
        const imageUrl = miracle.image
            ? miracle.image.path
            : "images/default.jpg";

        return (
            <div key={miracle.id} className="inline-block w-1/2 px-2 p-2">
                <div className="relative h-60 overflow-hidden shadow-lg rounded-lg ">
                    <img
                        src={imageUrl}
                        alt={miracle.title}
                        className="w-full h-full object-cover"
                    />
                    <Link to={`/extended/${miracle.id}`}>
                        <h2 className="absolute bottom-0 left-0 right-0 p-4 text-white text-xl font-bold bg-black bg-opacity-50 rounded-b-lg">
                            {miracle.title}
                        </h2>
                    </Link>
                </div>
            </div>
        );
    };

    const renderMiracles = () => (
        <div className="flex justify-center items-center">
            {miracles.slice(0, 3).map((miracle, i) => {
                const miracleIndex = (currentIndex + i) % miracles.length;
                return renderMiracleItem(miracles[miracleIndex]);
            })}
        </div>
    );

    return (
        <div className="w-full max-w-screen-xl mx-auto">
            {miracles.length ? (
                renderMiracles()
            ) : (
                <p className="text-gray-500">Loading miracles...</p>
            )}
        </div>
    );
}
