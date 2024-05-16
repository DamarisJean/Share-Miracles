import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export default function Likes({ miracleId }) {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const token = document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content");
                const response = await fetch(
                    `/api/miracles/${miracleId}/like-info`,
                    {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": token,
                        },
                    }
                );
                if (!response.ok) throw new Error("Failed to fetch like info");
                const data = await response.json();
                setIsLiked(data.isLiked);
                setLikesCount(data.likesCount);
            } catch (error) {
                console.error("Error:", error);
            }
        })();
    }, [miracleId]);
    const toggleLikeStatus = async () => {
        try {
            const method = isLiked ? "DELETE" : "POST";
            const token = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");
            const response = await fetch(`/api/miracles/${miracleId}/like`, {
                method,
                headers: {
                    Accept: "application/json",
                    "X-CSRF-TOKEN": token,
                },
            });
            if (!response.ok)
                throw new Error(
                    `Failed to ${isLiked ? "unlike" : "like"} the miracle`
                );

            setIsLiked(!isLiked);
            setLikesCount((prevCount) =>
                isLiked ? prevCount - 1 : prevCount + 1
            );
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="reaction">
                <button
                    className={`reaction-button ${isLiked ? "liked" : ""}`}
                    onClick={toggleLikeStatus}
                >
                    <FaHeart />
                </button>
                <div className="reaction-count">{likesCount}</div>
            </div>
        </>
    );
}
