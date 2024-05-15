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
                className="cylinder w-64 h-60 bg-cover bg-center flex items-center justify-center m-4 rounded-t-2xl" // Adjusted width and rounding
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className="text-center p-4 bg-black bg-opacity-50 rounded-b-lg">
                    <Link to={`/extended/${miracle.id}`}>
                        <h2 className="text-2xl font-bold text-white">
                            {miracle.title}
                        </h2>
                    </Link>
                </div>
            </div>
        );
    };

    const renderMiracles = () => (
        <div className="flex flex-row justify-center items-center overflow-x-auto w-full">
            {miracles.map((miracle) => {
                return renderMiracleItem(miracle);
            })}
        </div>
    );

    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full">
                <div className="text-center mt-20 w-full">
                    <h4 className="text-4xl font-bold tracking-tight text-[#2a4047] sm:text-5xl">
                        Read and Explore other Stories
                    </h4>
                </div>
            </div>
            <div
                className="w-full flex flex-col justify-center items-center pt-16"
                style={{
                    height: "calc(100vh - 4rem)",
                    backgroundColor: "#DFDAD6",
                }}
            >
                {miracles.length ? (
                    renderMiracles()
                ) : (
                    <p className="text-gray-500 text-center">
                        Loading miracles...
                    </p>
                )}
            </div>
        </div>
    );
}
