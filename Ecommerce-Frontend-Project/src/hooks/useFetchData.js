
import Axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const useFetchData = (url, intialData) => {

    const [data, setData] = useState(intialData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async(url) => {

        setIsLoading(true);

        try {
            const res = await Axios.get(url);
            setData(res.data);
            setError(null);
        } catch (error) {
            setError(error);
            setData(null);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData(url);
    }, [url]);


    return {
        data,
        error,
        isLoading
    }
}

export default useFetchData;