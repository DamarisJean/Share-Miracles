// Dashboard displays the list of miracles when the user is Authenticated next to Create Miracle section.
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import useFetchMiracleById from "../Components/Hooks/useFetchMiracleById";

export default function Dashboard({ auth }) {
    // Fetching the list of miracles using the custom hook
    const { data: miracles, loading, error } = useFetchMiracleById("/miracles");

    // Display a loading message while data is being fetched
    if (loading) return <div>Loading...</div>;

    // Display an error message if there was an error fetching the data
    if (error) return <div>Error: {error}</div>;

    return (
        // Only authenticated users can see the miracles, thats why we use AuthenticatedLayout
        <AuthenticatedLayout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="container mx-auto flex justify-center sm:ml-20">
                                <div className="grid gap-8 font-times">
                                    {/* Mapping through the list of miracles and displaying each one */}
                                    {miracles.map((miracle) => (
                                        <div
                                            key={miracle.id}
                                            className="flex flex-row sm:w-4/5 items-center border-b border-b-gray-200 pb-10 cursor-pointer"
                                        >
                                            {/* Link to the extended miracle page using miracle.id */}
                                            <Link
                                                href={route("extended.show", {
                                                    id: miracle.id,
                                                })}
                                                className="flex-1 md:w-auto"
                                            >
                                                <div className="bg-white">
                                                    <h2 className="text-xl font-semibold mb-2">
                                                        {miracle.title}
                                                    </h2>
                                                    <p className="text-gray-700 text-xs md:text-base">
                                                        {/* Display the first 200 characters of the miracle content */}
                                                        {miracle.content.substring(
                                                            0,
                                                            200
                                                        )}
                                                        ...
                                                    </p>
                                                </div>
                                            </Link>
                                            {/* Display the miracle image if it exists */}
                                            {miracle.image?.path && (
                                                <img
                                                    src={miracle.image.path}
                                                    alt={miracle.title}
                                                    className="w-28 h-28 object-cover ml-4"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
