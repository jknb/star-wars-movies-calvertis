import Movie from './movie/movie.js';

const Movies = ({ movies }) => {
    return (
        <>
            {movies.map(movie =>
                <Movie
                    key={movie.episode_id}
                    episodeId={movie.episode_id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                />)}
        </>
    )
}

export default Movies;