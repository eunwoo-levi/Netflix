import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRatedMovies = ()=>{
    return api.get(`/movie/top_rated`)
}

export const useTopRatedMoviesQuery =()=>{
    return useQuery({
        queryKey: ["movie-TopRated"],
        queryFn: fetchTopRatedMovies,
        select: (result) => result.data,
    })
}