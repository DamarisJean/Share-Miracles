import { Link, Head } from "@inertiajs/react";
import NavLink from "@/Components/Navigation/NavLink";
import ApplicationLogo from "@/Components/Logo/ApplicationLogo";
import MiraclesCarousel from "../Components/Carousel/MiraclesCarousel";
import Footer from "../Components/Footer/Footer";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative h-screen flex flex-col justify-between overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/background2.jpg)" }}
                >
                    {/* Blur Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#DFDAD6]"></div>
                </div>
                <div className="relative flex-0 flex flex-col justify-center items-center text-center">
                    <Link href="/">
                        <ApplicationLogo className="h-60 mb-5" />
                    </Link>
                    <h2 className="text-6xl font-bold tracking-tight text-[#2a4047] sm:text-7xl">
                        Start Writing Today.
                        <br />
                        Experience Miracles.
                    </h2>

                    <p className="mt-6 text-2xl leading-8 text-[#2a4047]">
                        Light finds its way to our hearts every day,
                        <strong> Read the stories</strong> of others and
                        <strong> Share your own.</strong>
                    </p>
                    <div className="flex flex-row gap-32 mt-20">
                        <div className="text-[#ffffff] px-32 py-4 rounded-full tracking-widest uppercase font-bold bg-[#2a4047] hover:text-[#ffffff] dark:text-[#ffffff] transition duration-200 transform hover:scale-110">
                            {auth.user ? (
                                <Link href={route("dashboard")}>
                                    START READING HERE
                                </Link>
                            ) : (
                                <Link href={route("register")}>
                                    START READING HERE
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <MiraclesCarousel />
            <Footer />
        </>
    );
}
