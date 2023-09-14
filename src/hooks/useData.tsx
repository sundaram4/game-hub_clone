import { useEffect, useState } from "react";
import { Genre } from "./useGenres";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T>{
    count: number;
    results: T[];
}

function useData<T> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    //console.log(genres)
    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig})
            .then(res => {
                setData(res.data.results);
                setLoading(false)
            })
            .catch(err => {
                //if(err instanceof CanceledError) return;
                if(err.name === 'CanceledError') return;
                //console.log(err.name)
                setError(err.message);
                setLoading(false)
            });
        return () => controller.abort();

    }, deps ? [...deps]: []);
    return { data, error, isLoading };

}

export default useData;