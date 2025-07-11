import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";

function Home(){

    const [searchQuery, setSearchQuery] = useState("");
    const [ movies, setMovies ] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {

                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
                
            } catch (error) {
                console.error("loadPopularMovies error: ", error);
            }  finally{
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])

    // const movies = [
    //     {id: 1, title: "John Wick", release_date: "2021"},
    //     {id: 2, title: "Tom & jerry", release_date: "2021"},
    //     {id: 3, title: "Daniel in the lions", release_date: "2021"},
    //     {id: 4, title: "Terminator", release_date: "2021"},
    // ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return(
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) =>
                 movie.title.toLowerCase().startsWith(searchQuery) &&
                (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home;