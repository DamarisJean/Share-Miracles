import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineImageNotSupported } from "react-icons/md";

export default function Images({ onImageSelect }) {
    const [images, setImages] = useState([]);
    const [showNoBackgroundOption, setShowNoBackgroundOption] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get("/api/images");
                console.log(response.data);
                setImages(response.data.images);
            } catch (error) {
                console.error("There was an error fetching the images", error);
            }
        };

        fetchImages();
    }, []);

    const handleNoImageClick = () => {
        onImageSelect(null);
        setShowNoBackgroundOption(false);
    };

    return (
        <div className="p-5 h-full overflow-y-auto">
            {showNoBackgroundOption && (
                <div className="flex justify-between items-center">
                    <button
                        className="text-white text-2xl"
                        onClick={handleNoImageClick}
                        title="Select no image"
                    >
                        <MdOutlineImageNotSupported className="w-9 h-9" />
                    </button>
                </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                {images.map((image) => (
                    <button
                        key={image.id}
                        className="focus:outline-none"
                        onClick={() => onImageSelect(image)}
                    >
                        <img
                            src={image.path}
                            alt={image.name}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <p className="text-gray-700 text-center mt-2">
                            {image.name}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}
