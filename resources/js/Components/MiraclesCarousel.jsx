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
            <div
                key={miracle.id}
                className="relative h-96 overflow-hidden shadow-lg rounded-br-3xl"
            >
                <img
                    src={imageUrl}
                    alt={miracle.title}
                    className="w-full h-full object-cover"
                />
                <Link to={`/extended/${miracle.id}`}>
                    <h2 className="absolute bottom-0 left-0 right-0 p-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-tr-md">
                        {miracle.title}
                    </h2>
                </Link>
            </div>
        );
    };

    const renderMiracles = () => (
        <div>
            {miracles.slice(0, 1).map((miracle, i) => {
                const miracleIndex = (currentIndex + i) % miracles.length;
                return renderMiracleItem(miracles[miracleIndex]);
            })}
        </div>
    );

    return (
        <div className="relative w-full max-w-[57rem] rounded-br-lg overflow-hidden">
            {miracles.length ? (
                renderMiracles()
            ) : (
                <p className="text-gray-500">Loading miracles...</p>
            )}
        </div>
    );
}
