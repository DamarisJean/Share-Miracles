// hooks/useFetchMiracles.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMiracles = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                setError("There was an error fetching the miracles");
                console.error(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchMiracles;
