import ApplicationLogo from "@/Components/Logo/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#DFDAD6]">
            <div>
                <Link href="/">
                    <ApplicationLogo className=" h-40 sm:h-44 p-10 mt-10" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md  px-6 py-4 overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
