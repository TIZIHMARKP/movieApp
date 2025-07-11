import MovieCard from "../components/MovieCard"

function Home(){

    const movies = [
        {id: 1, title: "John Wick", release_date: "2021"},
        {id: 2, title: "John Wick", release_date: "2021"},
        {id: 3, title: "John Wick", release_date: "2021"},
        {id: 4, title: "John Wick", release_date: "2021"},
    ]

    return(
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home;