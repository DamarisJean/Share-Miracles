// This component is part of the Carousel

import React from "react";
import { Link } from "@inertiajs/react";

const CallToActionSection = () => {
    return (
        <div className="relative text-center w-full py-8">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-t from-transparent to-[#DFDAD6] z-10"></div>
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url(/images/background2.jpg)",
                }}
            ></div>
            <h1 className="relative z-10 px-8 py-4 sm:py-8 text-3xl sm:text-5xl font-bold tracking-tight text-[#2a4047]">
                Don't Forget To Share Your Own
            </h1>
            {/* This link redirects to the "create" route.
                The authorization logic for this route is handled in the server-side routing file (e.g., web.php for Laravel) */}
            <Link
                className="relative z-10 inline-flex items-center justify-center py-4 text-white sm:px-32 px-8 text-xs sm:text-base font-bold uppercase ease-in-out active:bg-opacity-55 tracking-widest bg-[#2a4047] rounded-full transition duration-100 transform hover:scale-110 hover:text-white mb-24 mt-12"
                href={route("create")}
                active={route().current("create") ? true : undefined}
            >
                START WRITING HERE
            </Link>
        </div>
    );
};

export default CallToActionSection;
