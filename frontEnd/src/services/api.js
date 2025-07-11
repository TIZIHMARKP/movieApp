import dotenv from 'dotenv';
// dotenv.config();

// const API_KEY = import.meta.env.API_KEY
// const BASE_URL = import.meta.env.BASE_URL

const API_KEY = "Your API key Here"
const BASE_URL = "YOur base Url key here"


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`);
    const data = await response.json()
    return data.results
};
