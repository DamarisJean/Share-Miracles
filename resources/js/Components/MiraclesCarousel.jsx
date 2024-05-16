import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useFetchMiracles from "../Components/useFetchMiracles";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

export default function MiraclesCarousel() {
    const miracles = useFetchMiracles();
    const carousel = useRef(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

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
    const maxScroll = -(miracles.length * itemWidth - carouselWidth);

    const handleNext = () => {
        setScrollPosition((prev) => Math.max(prev - itemWidth, maxScroll));
    };

    const handlePrev = () => {
        setScrollPosition((prev) => Math.min(prev + itemWidth, 0));
    };

    const renderMiracleItem = (miracle) => {
        const imageUrl = miracle.image
            ? miracle.image.path
            : "images/default.jpg";

        const changingSizeTitleMiracle =
            miracle.title.length > 20
                ? `${miracle.title.slice(0, 20)}...`
                : miracle.title;
        return (
            <motion.div
                key={miracle.id}
                className="flex flex-col items-center justify-center mx-1 cursor-default overflow-x-auto"
                style={{ minWidth: `${itemWidth}px` }}
            >
                <div className="w-72 h-96 overflow-hidden rounded-full flex items-center justify-center  cursor-pointer overflow-x-auto">
                    <div
                        className="w-96 h-96 bg-cover bg-center"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                </div>
                <div className="mt-4 w-full text-center">
                    <a
                        href={`/extended/${miracle.id}`}
                        className="text-3xl font-times"
                    >
                        {changingSizeTitleMiracle}
                    </a>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="w-full flex flex-col justify-center items-center  bg-[#DFDAD6] h-[calc(100vh)]">
            <div className="text-center w-full mb-10">
                <h4 className="text-4xl font-bold tracking-tight text-[#2a4047] sm:text-5xl mt-8">
                    Read and Explore other Stories
                </h4>
            </div>
            <motion.div
                ref={carousel}
                className="w-full overflow-hidden relative"
            >
                <motion.div
                    drag="x"
                    dragConstraints={{
                        right: 0,
                        left: maxScroll,
                    }}
                    animate={{ x: scrollPosition }}
                    className="flex"
                >
                    {miracles.map(renderMiracleItem)}
                </motion.div>
            </motion.div>
            <div className="flex justify-center items-center mt-8 mb-8 cursor-pointer">
                <button
                    onClick={handlePrev}
                    className="text-[#2a4047] p-2 mx-2 text-4xl"
                >
                    <HiArrowLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="text-[#2a4047] p-2 mx-2 text-4xl"
                >
                    <HiArrowRight />
                </button>
            </div>
        </div>
    );
}
