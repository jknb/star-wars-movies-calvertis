import Movie from './movie/movie.js';

const Movies = ({ movies, clicked }) => {
    return (
        <>
            {movies.map(movie =>
                <Movie
                    clicked={clicked}
                    key={movie.episode_id}
                    episodeId={movie.episode_id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                />)}
        </>
    )
}

export default Movies;