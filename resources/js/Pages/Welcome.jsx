import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/Logo/ApplicationLogo";
import MiraclesCarousel from "../Components/Carousel/MiraclesCarousel";
import Footer from "../Components/Footer/Footer";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex flex-col justify-between min-h-screen overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/background2.jpg)" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#DFDAD6]"></div>
                </div>
                <div className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
                    <Link href="/">
                        <ApplicationLogo className="h-40 sm:h-60" />
                    </Link>
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#2a4047]">
                        Experience Miracles &
                        <br />
                        Start Writing Today.
                    </h2>

                    <p className="mt-6 text-lg sm:text-2xl leading-8 text-[#2a4047]">
                        Light finds its way to our hearts every day{" "}
                        <strong>Read the stories</strong> of others and{" "}
                        <strong>Share your own.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-32 mt-20 sm:mt-20">
                        <div className="text-[#ffffff] text-xs sm:text-base px-8 sm:px-32 py-4 rounded-full tracking-widest uppercase font-bold bg-[#2a4047] transition duration-100 ease-in-out active:bg-opacity-55">
                            {auth.user ? (
                                <Link href={route("dashboard")}>
                                    START READING HERE
                                </Link>
                            ) : (
                                <Link href={route("login")}>
                                    START READING HERE
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <MiraclesCarousel />
            </div>
            <Footer />
        </>
    );
}
