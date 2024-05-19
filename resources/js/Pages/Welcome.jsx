import { Link, Head } from "@inertiajs/react";
import NavLink from "@/Components/Navigation/NavLink";
import ApplicationLogo from "@/Components/Logo/ApplicationLogo";
import MiraclesCarousel from "../Components/Carousel/MiraclesCarousel";
import Footer from "../Components/Footer/Footer";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />

            <div
                className="h-screen bg-cover bg-center flex flex-col justify-between "
                style={{ backgroundImage: "url(/images/background2.jpg)" }}
            >
                <div className="flex-0 flex flex-col justify-center items-center text-center">
                    <Link href="/">
                        <ApplicationLogo className="h-60 mb-5" />
                    </Link>
                    <h2 className="text-6xl font-bold tracking-tight text-[#2a4047] sm:text-7xl">
                        Experience Miracles.
                        <br />
                        Start Writing Today.
                    </h2>

                    <p className="mt-6 text-2xl leading-8 text-[#2a4047]">
                        Light finds its way to our hearts every day,{" "}
                        <strong>Read the stories</strong> of others and{" "}
                        <strong>Share your own.</strong>
                    </p>
                    <div className="mt-10">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="inline-flex items-center px-6 py-3 bg-[#2a4047] border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                START HERE
                            </Link>
                        ) : (
                            <Link
                                href={route("login")}
                                className="inline-flex items-center px-6 py-3 bg-[#2a4047] border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                START HERE
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <MiraclesCarousel />
            <Footer />
        </>
    );
}
