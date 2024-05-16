import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useFetchMiracles from "../Components/useFetchMiracles";

export default function MiraclesCarousel() {
    const miracles = useFetchMiracles();
    const carousel = useRef(null);
    const [carouselWidth, setCarouselWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (carousel.current) {
                setCarouselWidth(carousel.current.offsetWidth);
            }
        };

        updateWidth(); // Initial call to set width
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const itemWidth = carouselWidth / 4; // number of miracles displayed

    const renderMiracleItem = (miracle) => {
        const imageUrl = miracle.image
            ? miracle.image.path
            : "images/default.jpg";
        return (
            <motion.div
                key={miracle.id}
                className="flex flex-col items-center justify-center mx-1"
                style={{ minWidth: `${itemWidth}px` }}
            >
                <div className="w-72 h-96 overflow-hidden rounded-full flex items-center justify-center mt-28">
                    <div
                        className="w-96 h-96 bg-cover bg-center"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                </div>
                <div className="mt-4 w-full text-center">
                    <a
                        href={`/extended/${miracle.id}`}
                        className="text-2xl font-times"
                    >
                        {miracle.title}
                    </a>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="w-full flex flex-col justify-center items-center pt-16 bg-[#DFDAD6] h-[calc(100vh-4rem)]">
            <div className="text-center w-full">
                <h4 className="text-4xl font-bold tracking-tight text-[#2a4047] sm:text-5xl">
                    Read and Explore other Stories
                </h4>
            </div>{" "}
            <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                className="w-full overflow-hidden"
            >
                <motion.div
                    drag="x"
                    dragConstraints={{
                        right: 0,
                        left: -(miracles.length * itemWidth - carouselWidth),
                    }}
                    className="flex"
                >
                    {miracles.map(renderMiracleItem)}
                </motion.div>
            </motion.div>
        </div>
    );
}
