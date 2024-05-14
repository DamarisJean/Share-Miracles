import React, { useEffect, useState, useContext } from "react";
import UserContext from "../../UserContext.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import Likes from "./Likes.jsx";

export default function ExtendedMiracle() {
    const [miracle, setMiracle] = useState({});
    const { user } = useContext(UserContext); 
    const [isLiked, setIsLiked] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchMiracle = async () => {
            try {
                const response = await axios.get(`/api/miracle/${id}`);
                setMiracle(response.data);
                setIsLiked(response.data.isLiked); 
            } catch (error) {
                console.log("There was an error fetching the miracle:", error);
            }
        };
        fetchMiracle();
    }, [id]);

    
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
        <Likes miracleId={miracle.id} isInitiallyLiked={isLiked} />
            )}
        </div>
            {miracle.image && (
                <div className="extendedMainBox-image">
                    <img src={miracle.image.path} alt={miracle.title} />
                </div>
            )}
            <h1 className="extendedMainBox-title">{miracle.title}</h1>
            <p className="extendedMainBox-text">{miracle.content}</p>
        </div>
    );
}
