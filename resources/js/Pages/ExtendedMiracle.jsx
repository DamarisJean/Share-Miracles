import React, { useContext } from "react";
import UserContext from "../Pages/ExtendedMiracle.jsx";
import { useParams } from "@inertiajs/react";
import useFetchMiracles from "../Components/useFetchMiraclesId.jsx";

export default function ExtendedMiracle() {
    const { user } = useContext(UserContext);
    const { id } = useParams();
    const {
        data: miracle,
        loading,
        error,
    } = useFetchMiracles(`/extended/${id}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="extendedMainBox">
            <div className="extendedMainBox-Date-Name">
                {miracle.user && (
                    <p className="extendedMainBox-data">{miracle.user.name}</p>
                )}
                <p className="extendedMainBox-data">
                    {miracle.created_at?.substring(0, 10)}
                </p>
                {user && (
                    <Likes
                        miracleId={miracle.id}
                        isInitiallyLiked={miracle.isLiked}
                    />
                )}
            </div>
            {miracle.image && (
                <img
                    src={miracle.image.path}
                    alt={miracle.title}
                    className="extendedMainBox-image"
                />
            )}
            <h1 className="extendedMainBox-title">{miracle.title}</h1>
            <p className="extendedMainBox-text">{miracle.content}</p>
        </div>
    );
}
