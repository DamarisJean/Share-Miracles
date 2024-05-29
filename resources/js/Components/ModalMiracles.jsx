import React from "react";

export default function ModalMiracles({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 lg:w-1/2 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-2xl text-gray-700"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}
