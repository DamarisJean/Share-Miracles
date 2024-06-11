// This component allows the user to create a new miracle post with a title, content, and an optional image.

import React, { useState, useRef } from "react";
import axios from "axios";
import Images from "../Components/Images/Images";
import { CiImageOn } from "react-icons/ci";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { CiCircleCheck } from "react-icons/ci";

export default function CreateMiracle({ auth }) {
    // Hooks for managing the state of the title, content, and selected image.
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [showImageSelector, setShowImageSelector] = useState(false);

    // Ref for the content text area to dynamically adjust its height.
    const textAreaRef = useRef(null);

    // State for managing the display of a popup message when there is a successful submission.
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    // Updates the content state and adjusts the text area's height to fit the content.
    const handleContentChange = (e) => {
        setContent(e.target.value);
        textAreaRef.current.style.height = "inherit";
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    };

    // Submits the new miracle POST to the server and resets the form when it's successful.
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

            // Displays the success message
            setPopupMessage("Published");
            setShowPopup(true);

            // Sets a timeout for the success message
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        } catch (error) {
            console.error("Error posting the miracle:", error);
        }
    };

    // Opens the image selector modal when the image button is clicked.
    const handleImageClick = () => {
        setShowImageSelector(true);
    };

    return (
        // Layout for authenticated users
        <AuthenticatedLayout user={auth.user}>
            <div className="min-h-screen flex flex-col items-center justify-start pt-8">
                <div className="space-y-8 px-12">
                    <div className="flex items-center gap-8">
                        {/* Show the image selector button if no image is selected */}
                        {!selectedImage && (
                            <button
                                className="select-image p-3 w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full hover:bg-gray-200 transition duration-150 ease-in-out"
                                type="button"
                                onClick={() =>
                                    setShowImageSelector(!showImageSelector)
                                }
                            >
                                <CiImageOn size={24} color="#4A5568" />
                            </button>
                        )}
                        {/* Publish button */}
                        <PrimaryButton type="submit" onClick={handleSubmit}>
                            Publish
                        </PrimaryButton>
                        {/* Popup message on successful submission */}
                        {showPopup && (
                            <div className="text-[#5DAB61] font-bold flex flex-row gap-1">
                                {popupMessage}
                                <CiCircleCheck className="mt-0.2 text-2xl" />
                            </div>
                        )}
                    </div>
                    {/* Display the selected image preview */}
                    {selectedImage && (
                        <div
                            className="selected-image-preview w-full h-48 bg-cover bg-center rounded cursor-pointer"
                            style={{
                                backgroundImage: `url(${selectedImage.path})`,
                            }}
                            onClick={handleImageClick}
                        />
                    )}
                    {/* Title input field */}
                    <textarea
                        id="titleInput"
                        className="w-full text-3xl font-times text-gray-800 bg-transparent border-none focus:border-none focus:ring-0 resize-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    {/* Content input field */}
                    <textarea
                        id="contentInput"
                        className="w-full mt-1 text-lg font-times text-gray-800 bg-transparent border-none focus:border-none focus:ring-0 resize-none"
                        value={content}
                        onChange={handleContentChange}
                        placeholder="What's your miracle?"
                        ref={textAreaRef}
                    />
                </div>
                {/* Image selector modal */}
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
