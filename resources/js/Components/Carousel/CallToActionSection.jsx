// import React from "react";
// import { Link } from "@inertiajs/react";

// const CallToActionSection = () => {
//     return (
//         <div className="text-center w-full mt-12">
//             <h1 className="mb-12 text-4xl font-bold tracking-tight text-[#2a4047] sm:text-5xl">
//                 Don't Forget To Share Your Own
//             </h1>
//             <Link
//                 className="inline-flex items-center justify-center px-32 py-4 text-white font-bold uppercase tracking-widest bg-[#2a4047] rounded-full transition duration-200 transform hover:scale-110 hover:text-white mb-24 mt-12"
//                 href={route("create")}
//                 active={route().current("create")}
//             >
//                 START WRITING HERE
//             </Link>
//         </div>
//     );
// };

// export default CallToActionSection;
import React from "react";
import { Link } from "@inertiajs/react";

const CallToActionSection = () => {
    return (
        <div className="text-center w-full mt-12">
            <h1 className="mb-12 text-4xl font-bold tracking-tight text-[#2a4047] sm:text-5xl">
                Don't Forget To Share Your Own
            </h1>
            <Link
                className="inline-flex items-center justify-center px-32 py-4 text-white font-bold uppercase tracking-widest bg-[#2a4047] rounded-full transition duration-200 transform hover:scale-110 hover:text-white mb-24 mt-12"
                href={route("create")}
                active={route().current("create") ? true : undefined}
            >
                START WRITING HERE
            </Link>
        </div>
    );
};

export default CallToActionSection;
