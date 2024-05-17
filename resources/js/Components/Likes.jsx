import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios"; // Ensure Axios is imported

export default function Likes({ miracleId }) {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {
        axios
            .get(`/api/miracles/${miracleId}/like-info`)
            .then((response) => {
                setIsLiked(response.data.isLiked);
                setLikesCount(response.data.likesCount);
            })
            .catch((error) => {
                console.error("Error fetching like info:", error);
            });
    }, [miracleId]);

    const toggleLikeStatus = async () => {
        try {
            const method = isLiked ? "delete" : "post";
            await axios[method](`/api/miracles/${miracleId}/like`);
            setIsLiked(!isLiked);
            setLikesCount((prevCount) =>
                isLiked ? prevCount - 1 : prevCount + 1
            );
        } catch (error) {
            console.error(
                `Error attempting to ${
                    isLiked ? "unlike" : "like"
                } the miracle:`,
                error
            );
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
