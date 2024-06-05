import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useFetchMiracles from "../Hooks/useFetchMiracles";
import MiracleItem from "./MiracleItem";
import CarouselNavigation from "./CarouselNavigation";
import CallToActionSection from "./CallToActionSection";

export default function MiraclesCarousel({ auth }) {
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

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const getItemWidth = () => {
        if (window.innerWidth < 640) {
            return carouselWidth * 0.8;
        } else {
            return carouselWidth / 3.4;
        }
    };

    const itemWidth = getItemWidth();
    const maxScroll = -(miracles.length * itemWidth - carouselWidth);

    const handleNext = () => {
        setScrollPosition((prev) => Math.max(prev - itemWidth, maxScroll));
    };

    const handlePrev = () => {
        setScrollPosition((prev) => Math.min(prev + itemWidth, 0));
    };

    return (
        <div className="w-full flex flex-col justify-center items-center bg-[#DFDAD6] ">
            <div className="text-center w-full mt-32 sm:mt-20">
                <h4 className=" px-8 text-3xl sm:text-5xl font-bold tracking-tight text-[#2a4047] py-8 sm:py-20">
                    Read and Explore Stories
                </h4>
            </div>
            <motion.div
                ref={carousel}
                className="w-full overflow-hidden relative h-auto pl-8 pt-18"
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: maxScroll }}
                    animate={{ x: scrollPosition }}
                    className="flex space-x-12"
                >
                    {miracles.map((miracle, index) => (
                        <MiracleItem
                            key={miracle.id}
                            miracle={miracle}
                            itemWidth={itemWidth}
                            isFirst={index === 0}
                        />
                    ))}
                </motion.div>
            </motion.div>

            <CarouselNavigation
                handlePrev={handlePrev}
                handleNext={handleNext}
            />
            <CallToActionSection />
        </div>
    );
}
