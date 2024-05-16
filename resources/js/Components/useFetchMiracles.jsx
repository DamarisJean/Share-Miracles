import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMiracles = () => {
    const [miracles, setMiracles] = useState([]);

    useEffect(() => {
        const fetchMiracles = async () => {
            try {
                const { data } = await axios.get("/miracles");
                setMiracles(data);
            } catch (error) {
                console.error("Error fetching miracles:", error);
            }
        };

        fetchMiracles();
    }, []);

    return miracles;
};

export default useFetchMiracles;
