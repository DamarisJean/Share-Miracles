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

    const handleMiraclesButtonClick = () => {
        window.location.href = "/create";
    };

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
                className="relative h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <Link to={`/extended/${miracle.id}`}>
                    <h2 className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-2xl font-bold">
                        {miracle.title}
                    </h2>
                </Link>
            </div>
        );
    };

    const renderMiracles = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {miracles.slice(0, 3).map((miracle, i) => {
                const miracleIndex = (currentIndex + i) % miracles.length;
                return renderMiracleItem(miracles[miracleIndex]);
            })}
        </div>
    );

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4">
                Read and Explore other Stories
            </h1>
            {miracles.length ? (
                renderMiracles()
            ) : (
                <p className="text-gray-500">Loading miracles...</p>
            )}
            <div className="border-t border-gray-300 my-8"></div>
            <h1 className="text-4xl font-bold mb-4">
                Don't Forget to Write your Own
            </h1>
            <div className="flex justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleMiraclesButtonClick}
                >
                    START HERE
                </button>
            </div>
        </div>
    );
}
