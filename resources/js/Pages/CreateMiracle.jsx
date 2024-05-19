import React, { useState, useRef } from "react";
import axios from "axios";
import Images from "../Components/Images/Images";
import { GoPlus } from "react-icons/go";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

export default function CreateMiracle({ auth }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const textAreaRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showImageSelector, setShowImageSelector] = useState(false);

    const handleContentChange = (e) => {
        setContent(e.target.value);
        textAreaRef.current.style.height = "inherit";
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/miracles", {
                title,
                content,
                user_id: auth.user.id,
                image_id: selectedImage?.id,
            });
            setTitle("");
            setContent("");
            setSelectedImage(null);
            textAreaRef.current.style.height = "inherit";
        } catch (error) {
            console.error("Error posting the miracle:", error);
        }
    };

    const handleImageClick = () => {
        setShowImageSelector(true);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="max-w-4xl mx-auto p-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            {!selectedImage && (
                                <button
                                    className="select-image p-3 w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full hover:bg-gray-200 transition duration-150 ease-in-out"
                                    type="button"
                                    onClick={() =>
                                        setShowImageSelector(!showImageSelector)
                                    }
                                >
                                    <GoPlus size={24} color="#4A5568" />
                                </button>
                            )}
                            <PrimaryButton type="submit">Publish</PrimaryButton>
                        </div>
                        {selectedImage && (
                            <div
                                className="selected-image-preview w-full h-48 bg-cover bg-center rounded cursor-pointer"
                                style={{
                                    backgroundImage: `url(${selectedImage.path})`,
                                }}
                                onClick={handleImageClick}
                            />
                        )}
                    </div>
                    <div>
                        <textarea
                            id="titleInput"
                            className="w-full text-3xl font-times text-gray-800 bg-transparent border-none focus:border-none focus:ring-0 resize-none"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                        />
                        <textarea
                            id="contentInput"
                            className="w-full mt-1 text-lg font-times text-gray-800 bg-transparent border-none focus:border-none focus:ring-0 resize-none"
                            value={content}
                            onChange={handleContentChange}
                            placeholder="What's your miracle?"
                            ref={textAreaRef}
                        />
                    </div>
                </form>

                {showImageSelector && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div
                            className="bg-gray-900 bg-opacity-50 p-6 rounded shadow-lg max-h-full max-w-full overflow-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Images
                                onImageSelect={(image) => {
                                    setSelectedImage(image);
                                    setShowImageSelector(false);
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
