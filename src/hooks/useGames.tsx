import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id:number;
    name:string;
    slug:string;
}

//create an interface that represents response object
export interface Game{
    id:number;
    name:string; 
    background_image: string;
    parent_platforms:{platform:Platform}[];
    metacritic: number;
}

interface FetchGamesResponse{
    count:number;
    results:Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([]);

    //we will use useEffect to send request to backend
    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>('/games', {signal:controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message)
            });
            
        return () => controller.abort();// return a cleanup functn inside a request    

    }, []) // [] --> without the empty array we constantly send request to backend

    return {games, error};
}

export default useGames;