import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";

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
        <div className=" reaction flex items-center">
            <button
                className={` reaction-button ${
                    isLiked ? "text-red-500" : "text-black"
                } focus:outline-none`}
                onClick={toggleLikeStatus}
            >
                <CiHeart className="h-4 w-4 sm:w-6 sm:h-6  ml-2" />
            </button>
            <div className="reaction-count ml-2 mr-1 text-gray-600 text-l">
                {likesCount}
            </div>
        </div>
    );
}
