import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const MiracleItem = ({ miracle, itemWidth }) => {
    const imageUrl = miracle.image ? miracle.image.path : "images/default.jpg";
    const maxTitleLength = 20;

    const lengthTitle = (title) => {
        return title.length > maxTitleLength
            ? `${title.substring(0, maxTitleLength)}...`
            : title;
    };

    return (
        <motion.div
            key={miracle.id}
            className="flex flex-col items-center justify-center mx-2 cursor-default rounded-lg h-auto"
            style={{ minWidth: `${itemWidth}px` }}
        >
            <Link
                href={route("extended.show", { id: miracle.id })}
                className="w-full h-48 md:h-76 overflow-hidden flex items-center justify-center cursor-pointer"
            >
                <div
                    className="w-full h-full bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
            </Link>
            <div className="mt-4 w-full text-center px-2">
                <Link
                    href={route("extended.show", { id: miracle.id })}
                    className="text-xl md:text-2xl font-times"
                >
                    {lengthTitle(miracle.title)}
                </Link>
            </div>
        </motion.div>
    );
};

export default MiracleItem;
