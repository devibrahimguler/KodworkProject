import { useState } from "react";
import axios from "axios";

const useFetch = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        try {
            const { data: responseData } = await axios.get(url);
            setData(responseData.results);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    return { error, loading, data, fetchData }
}

export default useFetch;