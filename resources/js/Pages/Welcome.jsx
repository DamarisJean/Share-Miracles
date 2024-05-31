import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/Logo/ApplicationLogo";
import MiraclesCarousel from "../Components/Carousel/MiraclesCarousel";
import Footer from "@/Components/Footer/Footer";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />

            <div className="relative flex flex-col justify-between  overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url(/images/background2.jpg)",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#DFDAD6]"></div>
                </div>
                <div className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-12">
                    <Link href="/">
                        <ApplicationLogo className="h-20 sm:h-32 lg:h-32" />
                    </Link>
                    <div className="mt-8 sm:mt-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#2a4047]">
                            Experience Miracles &
                            <br />
                            Start Writing Today.
                        </h2>
                    </div>
                    <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-8 text-[#2a4047]">
                        Light finds its way to our hearts every day,{" "}
                        <strong>read the stories</strong> of others, and{" "}
                        <strong>share your own.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12 sm:mt-20">
                        <div className="text-[#ffffff] text-xs sm:text-base px-6 sm:px-8 lg:px-32 py-4 rounded-full tracking-widest uppercase font-bold bg-[#2a4047] transition duration-100 ease-in-out active:bg-opacity-55">
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
