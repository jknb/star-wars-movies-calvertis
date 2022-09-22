import './starWarsPage.css';
import { useState } from 'react';
import Movies from '../movies/movies';
import MovieDescription from '../movies/movieDescription/movieDescription';
import SearchBar from '../filters/searchBar/searchBar';
import Loading from '../loading/loading';
import SortByButton from '../filters/sortBy/sortByButton/sortByButton';
import SortByModal from '../filters/sortBy/sortByModal/sortByModal';
import { sortByTypes } from '../../constants/sortByConstants';
import Error from '../error/error';
import Stack from '@mui/material/Stack';

const StarWarsPage = ({ movies, pending, error }) => {
    const [selectedMovie, setSelectedMovie] = useState({});
    const [searchBarText, setSearchBarText] = useState('');
    const [movieAttribute, setMovieAttribute] = useState(null);
    const [isSortByModalOpen, setIsSortByModalOpen] = useState(false);

    const toggleSortByModal = () => setIsSortByModalOpen(!isSortByModalOpen);

    const sortMovies = movies => {
        if (!movieAttribute) return movies;
        if (movieAttribute === sortByTypes.episode) {
            return sortByEpisode(movies);
        } else if (movieAttribute === sortByTypes.year) {
            return sortByYear(movies);
        }
    };

    const filterMovies = (movie) => (!!searchBarText ? movie.title.toLowerCase().includes(searchBarText.toLowerCase()) : true);

    const sortByEpisode = (movies) => movies.slice().sort((a, b) => a.episode_id - b.episode_id);

    const sortByYear = (movies) => movies.slice().sort((a, b) => a.release_date.localeCompare(b.release_date));

    return (
        <>
            <Stack spacing={2} direction="row">
                <SortByButton sortByButtonClicked={toggleSortByModal} />
                <SearchBar searchBarInputChanged={(inputValue) => setSearchBarText(inputValue)} />
            </Stack>

            {isSortByModalOpen ?
                <SortByModal closeButtonModalClicked={toggleSortByModal} setMovieAttribute={setMovieAttribute} />
                : null
            } 

            <div className="moviesContainer">
                <div className="movies">
                    {pending ?
                        <div className="loadingIcon">
                            <Loading />
                        </div>
                        :
                        <Stack spacing={2} direction="column">
                            <Movies
                                movies={sortMovies(movies.filter(filterMovies))}
                                movieClicked={(movie) => selectedMovie.episode_id === movie.episode_id ? setSelectedMovie({}) : setSelectedMovie(movie)}
                            />
                        </Stack>
                    }
                    {error && <Error />}
                </div>
                <hr />
                <div className="selectedMovie">
                    {selectedMovie.episode_id ?
                        <MovieDescription episodeId={selectedMovie.episode_id} title={selectedMovie.title} openingCrawl={selectedMovie.opening_crawl} />
                        : <div className="noMovieSelected">No Movie Selected</div>
                    }
                </div>
            </div>
        </>
    );

}

export default StarWarsPage;