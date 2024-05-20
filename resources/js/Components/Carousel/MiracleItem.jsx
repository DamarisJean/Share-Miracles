// components/Carousel/MiracleItem.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const MiracleItem = ({ miracle, itemWidth }) => {
    const imageUrl = miracle.image ? miracle.image.path : "images/default.jpg";
    const maxTitleLength = 20; // Set the maximum number of characters for the title

    const lenghtTitle = (title) => {
        return title.length > maxTitleLength
            ? `${title.substring(0, maxTitleLength)}...`
            : title;
    };

    return (
        <motion.div
            key={miracle.id}
            className="flex flex-col items-center justify-center mx-2 cursor-default rounded-lg"
            style={{ minWidth: `${itemWidth}px`, height: "auto" }} // Ensure enough height for content
        >
            <Link
                href={route("extended.show", { id: miracle.id })}
                className="w-full h-64 overflow-hidden flex items-center justify-center cursor-pointer"
            >
                <div
                    className="w-full h-full bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
            </Link>
            <div className="mt-4 w-full text-center px-2">
                <Link
                    href={route("extended.show", { id: miracle.id })}
                    className="text-2xl font-times"
                >
                    {lenghtTitle(miracle.title)}
                </Link>
            </div>
        </motion.div>
    );
};

export default MiracleItem;
