import Movie from './movie/movie.js';
import Divider from '@mui/material/Divider';

const Movies = ({ movies, movieClicked }) => (
    <>
        {movies.map(movie =>
            <div key={movie.episode_id}>
                <Movie
                    movieClicked={() => movieClicked(movie)}
                    episodeId={movie.episode_id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                />
                <Divider />
            </div>
        )}
    </>
);

export default Movies;