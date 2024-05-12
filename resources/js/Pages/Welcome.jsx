import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { SlArrowDown } from "react-icons/sl";
import { useRef } from "react";
import MiraclesCarousel from "../Components/MiraclesCarousel";

export default function Welcome({ auth }) {
    const miraclesRef = useRef(null);
    const scrollToMiracles = () => {
        miraclesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <>
            <Head title="Welcome" />
            <div
                className="h-screen bg-cover bg-center"
                style={{ backgroundImage: "url(/images/background2.jpg)" }}
            >
                <div className="relative flex flex-col items-center justify-center text-[#2a4047]">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <div>
                                    <Link href="/">
                                        <ApplicationLogo className="h-40" />
                                    </Link>
                                </div>
                            </div>

                            {/* NAVIGATION  */}
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition focus:outline-none"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none text-2a4047 font-semibold text-lg dark:focus-visible:#2a4047 hover:text-gray-400 dark:hover:text-gray-400"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none text-2a4047 font-semibold text-lg dark:focus-visible:#2a4047 hover:text-gray-400 dark:hover:text-gray-400"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                            {/* NAVIGATION  */}
                        </header>

                        <main className="mt-6 flex flex-col items-center justify-center">
                            <div className="text-center mb-8">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-5xl font-bold mb-4 mt-10">
                                        Experience Miracles
                                    </h1>
                                    <h4 className="text-3xl max-w-2xl text-left ml-40 ">
                                        Light finds its way to our hearts every
                                        day.
                                        <br />
                                        <Link to="/miracles" className="mr-2">
                                            <b>Read the stories</b>
                                        </Link>
                                        <span className="mr-2">
                                            of others and
                                        </span>
                                        <Link to="/create">
                                            <b>Share your own.</b>
                                        </Link>
                                        <span>|</span>
                                    </h4>
                                </div>
                            </div>
                            <button
                                onClick={scrollToMiracles}
                                className="text-[#2a4047] font-bold py-20 px-3 rounded-full focus:outline-none focus:shadow-outline"
                            >
                                <SlArrowDown className="text-5xl" />
                            </button>
                        </main>
                    </div>
                </div>
            </div>
            <MiraclesCarousel />
        </>
    );
}
