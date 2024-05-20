// components/Carousel/CarouselNavigation.jsx
import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const CarouselNavigation = ({ handlePrev, handleNext }) => {
    return (
        <div className="w-full flex justify-center items-center my-4 cursor-pointer mt-12">
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
    );
};

export default CarouselNavigation;
