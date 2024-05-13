import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import MiraclesCarousel from "../Components/MiraclesCarousel";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />

            <div
                className="h-screen bg-cover bg-center"
                style={{ backgroundImage: "url(/images/background2.jpg)" }}
            >
                <div className="left-0 right-0 flex justify-center">
                    <Link href="/">
                        <ApplicationLogo className="h-40" />
                    </Link>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6  lg:px-1">
                    <div className="relative isolate overflow-hidden  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-[#2a4047] sm:text-5xl">
                                Experience Miracles.
                                <br />
                                Start writing today.
                            </h2>
                            <p className="mt-6 text-xl leading-8 text-[#2a4047]">
                                Light finds its way to our hearts every day,
                                Read the stories of others and share you own.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="inline-flex items-center px-6 py-3 bg-[#2a4047] border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
                                    >
                                        Get started
                                    </Link>
                                ) : (
                                    <Link
                                        href={route("login")}
                                        className="inline-flex items-center px-6 py-3 bg-[#2a4047] border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-gray-700   focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
                                    >
                                        Get started
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8 ">
                            <div>
                                <MiraclesCarousel />
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
